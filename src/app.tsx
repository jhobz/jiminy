import './index.css'
import React, { useState } from 'react'
import FarmingPage from './components/FarmingPage'
import InventoryPage from './components/InventoryPage'
import { CardProps } from './components/Card'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider, Navigate, Link } from 'react-router-dom'

const App = () => {
    const [inventory, setInventory] = useState([] as CardProps[])

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