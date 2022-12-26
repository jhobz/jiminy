import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import FarmingPage from './components/FarmingPage'

const App = () => (
    <div
        style={{
            height: '100vh',
        }}
    >
        <h1>FARMING</h1>
        <br />
        <FarmingPage />
    </div>
)

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)