import './Card.css'

export interface CardProps {
    name: string
    color: string
    onClick?: Function
    value?: number
    frame?: boolean
}

export default function Card({ name, color, onClick, value = -1, frame = true }: CardProps) {
    return (
        <button
            className={'Card ' + name}
            data-frame={frame}
            data-color={color}
            onClick={(e) => onClick()} >
            <span className="card-title">{name}</span>
            <div className="card-value">
                {value >= 0 ? value : ''}
            </div>
        </button>
    )
}