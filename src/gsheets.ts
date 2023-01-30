import { promises as fs } from 'fs'
import path from 'path'
import process from 'process'
import { authenticate } from '@google-cloud/local-auth'
import { google } from 'googleapis'
import { OAuth2Client } from 'google-auth-library'
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth'


// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = path.join(process.cwd(), 'token.json')
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json')
const SPREADSHEET_ID = '14e1Om4S056S15-wE1McW171Opv5URELAC8sMu4YS6qs'

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
export async function loadSavedCredentialsIfExist(): Promise<OAuth2Client | JSONClient | null> {
    try {
        const content = await fs.readFile(TOKEN_PATH, 'utf8')
        const credentials = JSON.parse(content)
        return google.auth.fromJSON(credentials)
    } catch (err) {
        return null
    }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client: any): Promise<void> {
    const content = await fs.readFile(CREDENTIALS_PATH, 'utf8')
    const keys = JSON.parse(content)
    const key = keys.installed || keys.web
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    })
    await fs.writeFile(TOKEN_PATH, payload)
}

/**
 * Load or request authorization to call APIs.
 *
 */
export async function authorize() {
    let client = await loadSavedCredentialsIfExist()
    if (client) {
        return client
    }
    client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
    })
    if (client.credentials) {
        await saveCredentials(client)
    }
    return client
}

export async function getSheetData(auth: OAuth2Client, range: string): Promise<string[][]> | null {
    const sheets = google.sheets({version: 'v4', auth})
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID, // Master timing data sheet for map cards
        range,
    })

    const rows = res.data.values
    if (!rows || rows.length === 0) {
        console.log('No data found.')
        return
    }

    return rows
}

export async function getTimingData(auth: OAuth2Client) {
    return getSheetData(auth, 'TIMING_DATA!D3:S146')
}

export async function getRouteData(auth: OAuth2Client) {
    return getSheetData(auth, 'ROUTE_DATA!A2:O35')
}
