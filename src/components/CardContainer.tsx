import Card, { CardProps } from "./Card";
import './CardContainer.css'

interface PropTypes {
  cards: CardProps[]
}

export default function CardContainer({ cards }: PropTypes) {
  const listItems = cards.map((card, index) =>
    <Card
        key={index}
        name={card.name}
        color={card.color}
        onClickAction={card.onClickAction}
        value={card.value} />
  )

  return (
    <div className="CardContainer">{listItems}</div>
  )
}
