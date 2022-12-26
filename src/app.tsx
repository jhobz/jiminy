import './index.css'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import FarmingPage from './components/FarmingPage'
import { CardProps } from './components/Card'

const App = () => {
    const [inventory, setInventory] = useState([] as CardProps[])

    return (
        <div className="app-container">
            <div>Inventory: {inventory.map((value) => value.name + ' ' + value.value).join(', ')}</div>
            <FarmingPage
                inventory={inventory}
                onInventoryChange={setInventory} />
        </div>
    )
}

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)