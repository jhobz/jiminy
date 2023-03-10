import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card, { CardProps } from './Card'
import CardContainer from './CardContainer'
import RoomContainer from './RoomContainer'

interface PropTypes {
    inventory: CardProps[]
    onInventoryChange: Function
}

export default function InventoryPage({ inventory, onInventoryChange }: PropTypes) {
    // remove card from top-level app inventory
    const onClick = (index: number) => {
        onInventoryChange(inventory.filter((_, i) => i !== index))
    }

    return (
        <div>
            <Link to='/farming'>Farming</Link>
            <h1>Home</h1>
            <RoomContainer />
            <div className='inventory-container'>
                <CardContainer cards={inventory} onActiveIndexChange={onClick} />
            </div>
        </div>
    )
}
