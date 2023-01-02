import './Card.css'

export interface CardProps {
    name: 'almighty' | 'blackroom' | 'bottomless' | 'feeble'    | 'looming'  | 'premium' | 'roulette' | 
          'sleeping' | 'teeming'   | 'tranquil'   | 'whiteroom' | 'alchemic' | 'lasting' | 'martial'  | 
          'meeting'  | 'sorcerous' | 'stagnant'   | 'strong'    | 'calm'     | 'false'   | 'guarded'  | 
          'mingling' | 'moments'   | 'moogle'     | 'joker'     | 'frame'
    color: 'red' | 'green' | 'blue' | 'gray'
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