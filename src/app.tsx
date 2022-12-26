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
                { name: 'almighty', color: 'red', value: 4, onClickAction: () => console.log('almighty') },
                { name: 'blackroom', color: 'red', value: 2, onClickAction: () => console.log('blackroom') },
                { name: 'bottomless', color: 'red', value: 2, onClickAction: () => console.log('bottomless') },
                { name: 'feeble', color: 'red', value: 2, onClickAction: () => console.log('feeble') },
                { name: 'looming', color: 'red', value: 2, onClickAction: () => console.log('looming') },
                { name: 'premium', color: 'red', value: 2, onClickAction: () => console.log('premium') },
                { name: 'roulette', color: 'red', value: 2, onClickAction: () => console.log('roulette') },
                { name: 'sleeping', color: 'red', value: 2, onClickAction: () => console.log('sleeping') },
                { name: 'teeming', color: 'red', value: 2, onClickAction: () => console.log('teeming')} ,
                { name: 'tranquil', color: 'red', value: 2, onClickAction: () => console.log('tranquil') },
                { name: 'whiteroom', color: 'red', value: 2, onClickAction: () => console.log('whiteroom') },
            ]} />
    </div>
)

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)