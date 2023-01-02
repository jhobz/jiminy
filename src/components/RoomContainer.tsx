import React from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import './RoomContainer.css'

interface PropTypes {

}

export default function RoomContainer({}: PropTypes) {
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
                <button className="direction east">E</button>
                <button className="direction west">W</button>
            </div>
            <div className="next_room">
                <h3>Next Room</h3>
                <p className="room-name">{room}</p>
                <CardContainer cards={[{name: 'feeble', color: 'red', value: 9},{name: 'feeble', color: 'red', value: 9},{name: 'feeble', color: 'red', value: 9}]} />
            </div>
        </div>
    )
}
