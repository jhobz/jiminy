import './index.css'
import React, { useState } from 'react'
import FarmingPage from './components/FarmingPage'
import InventoryPage from './components/InventoryPage'
import { CardProps } from './components/Card'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider, Navigate, Link } from 'react-router-dom'

const DEFAULT_INVENTORY: CardProps[] = [
    { color: 'red', name: 'feeble', value: 5 },
    { color: 'green', name: 'meeting', value: 6 },
    { color: 'blue', name: 'moments', value: 1 },
    { color: 'gray', name: 'joker' },
    { color: 'gray', name: 'joker' },
    { color: 'gray', name: 'joker' },
    { color: 'red', name: 'sleeping', value: 4 }
] || []

const App = () => {
    const [inventory, setInventory] = useState(DEFAULT_INVENTORY as CardProps[])

    const router = createHashRouter([
        {
            path: '/',
            element: <InventoryPage inventory={inventory} onInventoryChange={setInventory} />,
        },
        {
            path: '/farming',
            element: <FarmingPage inventory={inventory} onInventoryChange={setInventory} />
        },
        {
            path: '*',
            element: <Navigate to='/' />
        }
    ])

    return (
        <div className="app-container">
            <RouterProvider router={router} />
        </div>
    )
}

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)