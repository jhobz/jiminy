import './Card.css'

export interface CardProps {
    name: string
    color: string
    onClickAction: Function
    value: number
    frame?: boolean
}

export default function Card({ name, color, onClickAction, value, frame = true }: CardProps) {
    return (
        <button
            className={'Card ' + name}
            data-frame={frame}
            data-color={color}
            onClick={(e) => onClickAction()} >
            <span className="card-title">{name}</span>
            <div className="card-value">
                {value >= 0 ? value : ''}
            </div>
        </button>
    )
}