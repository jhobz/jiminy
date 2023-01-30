// import { OAuth2Client } from 'google-auth-library'
// import { google } from 'googleapis'
import React from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import './RoomContainer.css'

interface PropTypes {
    room: { floor: number, room: number }
}

interface FloorRoute {
    KoB?: string[]
    KoG?: string[]
    KtT?: string[]
    '3+'?: string[]
    '<3'?: string[]
}

export default function RoomContainer({ room }: PropTypes) {
    let GSheetsOAuthClient: any
    let routeData: FloorRoute[]

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
    window.electron.onMessage('getRouteData', (data: FloorRoute[]) => {
        console.log('Data from spreadsheet:')
        console.log(routeData)
        routeData = data
    })

    return (
        <div className="RoomContainer">
            <div className="current_room">
                <h3>Current Room</h3>
                <p className="room-name">{`Floor ${room.floor + 1} - Room ${room.room + 1}`}</p>
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
                <p className="room-name">{`next room`}</p>
                <CardContainer cards={[{name: 'feeble', color: 'red', value: 9},{name: 'feeble', color: 'red', value: 9},{name: 'feeble', color: 'red', value: 9}]} />
            </div>
        </div>
    )
}
