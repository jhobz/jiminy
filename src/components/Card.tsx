import './Card.css'

export interface CardProps {
    name: string
    color: string
    onClickAction: Function
    value: number
}

export default function Card({ name, color, onClickAction, value }: CardProps) {
    return (
        <button
            className={'Card ' + name}
            data-color={color}
            onClick={(e) => onClickAction()} >
            <span>{name}</span>
            <div>
                {value}
            </div>
        </button>
    )
}