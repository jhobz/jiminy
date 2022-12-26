import Card, { CardProps } from "./Card";
import './CardContainer.css'

interface PropTypes {
  cards: CardProps[]
}

export default function CardContainer({ cards }: PropTypes) {
  const listItems = cards.map((card, index) =>
    <Card
        key={index}
        {...card} />
  )

  return (
    <div className="CardContainer">{listItems}</div>
  )
}
