import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CardContainer from './CardContainer'
import { CardProps } from './Card'
import './FarmingPage.css'
import Goals from './Goals'

interface PropTypes {
    inventory: CardProps[]
    onInventoryChange: Function
}

export default function FarmingPage({ inventory, onInventoryChange }: PropTypes) {
    // ============ CARDS
    const CARD_COLORS: CardProps[] = [
        { name: 'frame', color: 'red', frame: false },
        { name: 'frame', color: 'green', frame: false },
        { name: 'frame', color: 'blue', frame: false },
        { name: 'frame', color: 'gray', frame: false },
    ]
    const RED_CARDS: CardProps[] = [
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
    ]
    const GREEN_CARDS: CardProps[] = [
        { name: 'alchemic', color: 'green' },
        { name: 'lasting', color: 'green' },
        { name: 'martial', color: 'green' },
        { name: 'meeting', color: 'green' },
        { name: 'sorcerous', color: 'green' },
        { name: 'stagnant', color: 'green' },
        { name: 'strong', color: 'green' },
    ]
    const BLUE_CARDS: CardProps[] = [
        { name: 'calm', color: 'blue' },
        { name: 'false', color: 'blue' },
        { name: 'guarded', color: 'blue' },
        { name: 'mingling', color: 'blue' },
        { name: 'moments', color: 'blue' },
        { name: 'moogle', color: 'blue' },
    ]
    const OTHER_CARDS: CardProps[] = [
        { name: 'joker', color: 'gray' },
    ]
    const CARD_VALUES: CardProps[] = [
        { name: 'frame', color: 'gray', frame: false, value: 0 },
        { name: 'frame', color: 'gray', frame: false, value: 1 },
        { name: 'frame', color: 'gray', frame: false, value: 2 },
        { name: 'frame', color: 'gray', frame: false, value: 3 },
        { name: 'frame', color: 'gray', frame: false, value: 4 },
        { name: 'frame', color: 'gray', frame: false, value: 5 },
        { name: 'frame', color: 'gray', frame: false, value: 6 },
        { name: 'frame', color: 'gray', frame: false, value: 7 },
        { name: 'frame', color: 'gray', frame: false, value: 8 },
        { name: 'frame', color: 'gray', frame: false, value: 9 },
    ]
    const SORT_ORDER = {
        color: {
            'red': 0,
            'green': 1,
            'blue': 2,
            'gray': 3
        },
        name: {
            'tranquil': 0,
            'teeming': 1,
            'feeble': 2,
            'almighty': 3,
            'sleeping': 4,
            'looming': 5,
            'premium': 6,
            'whiteroom': 7,
            'blackroom': 8,
            'bottomless': 9,
            'roulette': 10,
            'martial': 0,
            'sorcerous': 1,
            'alchemic': 2,
            'meeting': 3,
            'stagnant': 4,
            'strong': 5,
            'lasting': 6,
            'calm': 0,
            'guarded': 1,
            'false': 2,
            'moments': 3,
            'mingling': 4,
            'moogle': 5,
            'joker': 0,
            'frame': -1
        },
    }

    // ============ STATE
    const [activeColor, setActiveColor] = useState(-1)
    const [activeCard, setActiveCard] = useState(-1)
    const [activeValue, setActiveValue] = useState(-1)

    const resetState = () => {
        setActiveColor(-1)
        setActiveCard(-1)
        setActiveValue(-1)
    }
    // append card to top-level app inventory
    useEffect(() => {
        // Random Joker
        if (activeColor === 3 && activeCard === 0) {
            onInventoryChange(inventory.concat([OTHER_CARDS[0]]))
            resetState()
        }
        else if (activeValue >= 0) {
            let newCard
            if (activeColor === 0) {
                newCard = { ...RED_CARDS[activeCard] }
            }
            else if (activeColor === 1) {
                newCard = { ...GREEN_CARDS[activeCard] }
            }
            else if (activeColor === 2) {
                newCard = { ...BLUE_CARDS[activeCard] }
            }
            newCard.value = activeValue
            onInventoryChange(
                inventory.concat([newCard])
                    .sort((a, b) => {
                        if (a.color !== b.color)
                            return SORT_ORDER.color[a.color] - SORT_ORDER.color[b.color]
                        if (a.name !== b.name)
                            return SORT_ORDER.name[a.name] - SORT_ORDER.name[b.name]
                        return a.value - b.value
                    }))

            resetState()
        }
    }, [activeCard, activeValue])

    return (
    <div className="FarmingPage">
        <Link to='/'>{'< '}Back</Link>
        <h1>Farming</h1>
        <Goals inventory={inventory} />
        <CardContainer
            activeIndex={activeColor}
            onActiveIndexChange={setActiveColor}
            cards={ CARD_COLORS } />

        {/* Card types */}
        { activeColor === 0 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={ RED_CARDS } />) }
        { activeColor === 1 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={ GREEN_CARDS } />) }
        { activeColor === 2 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={ BLUE_CARDS } />) }
        { activeColor === 3 && (<CardContainer
            activeIndex={activeCard}
            onActiveIndexChange={setActiveCard}
            cards={ OTHER_CARDS } />) }

        {/* Card values */}
        { activeCard >= 0 && activeColor < 3 && (<CardContainer
            activeIndex={activeValue}
            onActiveIndexChange={setActiveValue}
            cards={ CARD_VALUES } />) }
    </div>
    )
}
