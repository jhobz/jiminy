import React from 'react'
import { Link } from 'react-router-dom'
import { CardProps } from './Card'

interface PropTypes {
    inventory: CardProps[]
    onInventoryChange: Function
}

export default function InventoryPage({ inventory, onInventoryChange }: PropTypes) {
  return (
    <div>
        <Link to='/farming'>Farming</Link>
        <h1>Home</h1>
    </div>
  )
}
