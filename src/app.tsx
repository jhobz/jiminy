import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import CardContainer from './components/CardContainer'

const App = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}
    >
        <h1>
            Hello world w/React this time
        </h1>
        <br />
        <CardContainer
            cards={[
                {name: 'teeming', color: 'red', value: 4, onClickAction: () => console.log('teeming')},
                {name: 'tranquil', color: 'red', value: 2, onClickAction: () => console.log('tranquil')},
                {name: 'sleeping', color: 'red', value: 2, onClickAction: () => console.log('sleeping')},
                {name: 'sleeping', color: 'red', value: 2, onClickAction: () => console.log('sleeping')},
            ]} />
    </div>
)

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)