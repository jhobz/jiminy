import './index.css'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import FarmingPage from './components/FarmingPage'
import { CardProps } from './components/Card'

const App = () => {
    const [inventory, setInventory] = useState([])

    return (
        <div
            style={{
                height: '100vh',
            }}
        >
            <h1>FARMING</h1>
            <div>Inventory: {inventory.map((value) => value.name + ' ' + value.value).join(', ')}</div>
            <br />
            <FarmingPage
                inventory={inventory}
                onInventoryChange={setInventory} />
        </div>
    )
}

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)