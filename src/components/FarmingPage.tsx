import React, { useState, useEffect } from 'react'
import CardContainer from './CardContainer'
import './FarmingPage.css'

export default function FarmingPage() {
    const [activeColor, setActiveColor] = useState(-1)
    const [activeCard, setActiveCard] = useState(-1)
    const [activeValue, setActiveValue] = useState(-1)

    useEffect(() => {
        // append card to top-level app inventory
        // TODO

        // reset state
        setActiveColor(-1)
        setActiveCard(-1)
        setActiveValue(-1)
    }, [activeValue])

    return (
    <div className="FarmingPage">
        <div>Color: {activeColor}</div>
        <div>Card: {activeCard}</div>
        <div>Value: {activeValue}</div>
        <CardContainer
            activeIndex={activeColor}
            onActiveIndexChange={setActiveColor}
            cards={[
                { name: 'red', color: 'red' },
                { name: 'green', color: 'green' },
                { name: 'blue', color: 'blue' },
                { name: 'other', color: 'gray' },
            ]} />

        {/* Card types */}
        { activeColor === 0 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={[
                { name: 'almighty', color: 'red' },
                { name: 'blackroom', color: 'red' },
                { name: 'bottomless', color: 'red' },
                { name: 'feeble', color: 'red' },
                { name: 'looming', color: 'red' },
                { name: 'premium', color: 'red' },
                { name: 'roulette', color: 'red' },
                { name: 'sleeping', color: 'red' },
                { name: 'teeming', color: 'red' },
                { name: 'tranquil', color: 'red' },
                { name: 'whiteroom', color: 'red' },
            ]} />) }
        { activeColor === 1 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={[
                { name: 'daze', color: 'green' },
                { name: 'something', color: 'green' },
                { name: 'idk', color: 'green' },
                { name: 'who knows', color: 'green' },
            ]} />) }
        { activeColor === 2 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={[
                { name: 'reprieve', color: 'blue' },
                { name: 'bounty', color: 'blue' },
                { name: 'moogle', color: 'blue' },
            ]} />) }
        { activeColor === 3 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={[
                { name: 'random joker', color: 'gray' },
            ]} />) }

        {/* Card values */}
        { activeCard >= 0 && (<CardContainer
            activeIndex={activeValue}
            onActiveIndexChange={setActiveValue}
            cards={[
                { name: '0', color: 'red', frame: false, value: 0 },
                { name: '1', color: 'red', frame: false, value: 1 },
                { name: '2', color: 'red', frame: false, value: 2 },
                { name: '3', color: 'red', frame: false, value: 3 },
                { name: '4', color: 'red', frame: false, value: 4 },
                { name: '5', color: 'red', frame: false, value: 5 },
                { name: '6', color: 'red', frame: false, value: 6 },
                { name: '7', color: 'red', frame: false, value: 7 },
                { name: '8', color: 'red', frame: false, value: 8 },
                { name: '9', color: 'red', frame: false, value: 9 },
            ]} />) }
    </div>
    )
}
