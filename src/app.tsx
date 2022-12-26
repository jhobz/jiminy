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
            FARMING
        </h1>
        <br />
        <CardContainer
            cards={[
                { name: 'red', color: 'red', value: -1, onClickAction: () => console.log('red') },
                { name: 'green', color: 'green', value: -1, onClickAction: () => console.log('green') },
                { name: 'blue', color: 'blue', value: -1, onClickAction: () => console.log('blue') },
                { name: 'other', color: 'gray', value: -1, onClickAction: () => console.log('other') },
            ]} />
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
        <CardContainer
            cards={[
                { name: '0', color: 'red', frame: false, value: 0, onClickAction: () => console.log('0') },
                { name: '1', color: 'red', frame: false, value: 1, onClickAction: () => console.log('1') },
                { name: '2', color: 'red', frame: false, value: 2, onClickAction: () => console.log('2') },
                { name: '3', color: 'red', frame: false, value: 3, onClickAction: () => console.log('3') },
                { name: '4', color: 'red', frame: false, value: 4, onClickAction: () => console.log('4') },
                { name: '5', color: 'red', frame: false, value: 5, onClickAction: () => console.log('5') },
                { name: '6', color: 'red', frame: false, value: 6, onClickAction: () => console.log('6') },
                { name: '7', color: 'red', frame: false, value: 7, onClickAction: () => console.log('7') },
                { name: '8', color: 'red', frame: false, value: 8, onClickAction: () => console.log('8') },
                { name: '9', color: 'red', frame: false, value: 9, onClickAction: () => console.log('9') },
            ]} />
    </div>
)

const root = createRoot(document.getElementById('react-root'))
root.render(<App />)