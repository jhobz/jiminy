import { useState } from 'react'
import Card, { CardProps } from './Card'
import './CardContainer.css'

interface PropTypes {
  cards: CardProps[]
  activeIndex?: number
  onActiveIndexChange?: Function
}

export default function CardContainer({ cards, activeIndex, onActiveIndexChange = () => {} }: PropTypes) {
  const listItems = cards.map((card, index) =>
    <Card
        key={index}
        {...card}
        onClick={() => onActiveIndexChange(index)}/>
  )

  return (
    <div className="CardContainer">{listItems}</div>
  )
}
