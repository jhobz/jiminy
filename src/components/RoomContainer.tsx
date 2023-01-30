// import { OAuth2Client } from 'google-auth-library'
// import { google } from 'googleapis'
import React from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import './RoomContainer.css'

interface PropTypes {

}

// async function getTimingData(auth: any): Promise<string[][]> | null {
//     return [['']]
//     // const sheets = google.sheets({version: 'v4', auth})
//     // const res = await sheets.spreadsheets.values.get({
//     //     // spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms', // Sample sheet
//     //     spreadsheetId: '14e1Om4S056S15-wE1McW171Opv5URELAC8sMu4YS6qs', // Master timing data sheet for map cards
//     //     range: 'DATA!D3:S146',
//     // })

//     // const rows = res.data.values
//     // if (!rows || rows.length === 0) {
//     //     console.log('No data found.')
//     //     return
//     // }

//     // return rows
// }

export default function RoomContainer({}: PropTypes) {
    let GSheetsOAuthClient: any
    // @ts-ignore global
    window.electron.onMessage('GSheetsAuth', (client: any) => {
        if (client) {
            GSheetsOAuthClient = client
        } else {
            console.error('Google authentication failed')
        }
    })
    // @ts-ignore global
    window.electron.onMessage('getTimingData', (rows: string[][]) => {
        console.log('Data from spreadsheet:')
        rows.forEach((row) => {
            let out = ''
            row.forEach((col) => {
                out += `${col}, `
            })
            console.log(out)
        })
    })
    // @ts-ignore global
    window.electron.onMessage('getRouteData', (rows: string[][]) => {
        console.log('Data from spreadsheet:')
        rows.forEach((row) => {
            let out = ''
            row.forEach((col) => {
                out += `${col}, `
            })
            console.log(out)
        })
    })

    const room = 'Floor 1 - OC - Room 1'
    return (
        <div className="RoomContainer">
            <div className="current_room">
                <h3>Current Room</h3>
                <p className="room-name">{room}</p>
                <CardContainer cards={[{name: 'feeble', color: 'red', value: 9}]} />
            </div>
            <div className="floor_map">
                <button className="direction north">N</button>
                <button className="direction south">S</button>
                <button className="direction east"
                    onClick={ () => {
                        // @ts-ignore global
                        window.electron.sendMessage('getTimingData')
                    }} >E</button>
                <button className="direction west"
                    onClick={ () => {
                        // @ts-ignore global
                        window.electron.sendMessage('getRouteData')
                    }} >W</button>
            </div>
            <div className="next_room">
                <h3>Next Room</h3>
                <p className="room-name">{room}</p>
                <CardContainer cards={[{name: 'feeble', color: 'red', value: 9},{name: 'feeble', color: 'red', value: 9},{name: 'feeble', color: 'red', value: 9}]} />
            </div>
        </div>
    )
}
