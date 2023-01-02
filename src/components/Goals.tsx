import React, { useEffect, useState } from 'react'
import { CardProps } from './Card'
import './Goals.css'

interface PropTypes {
  inventory: CardProps[]
}

interface Goal {
  name: string
  filter: CardProps
  target: {
    count?: number
    sum?: number
  }
}

export default function Goals({ inventory }: PropTypes) {
  let [goals, setGoals] = useState([
    {
      name: 'Blue 1',
      filter: {
        color: 'blue',
        value: 1
      } as CardProps,
      target: {
        count: 1
      }
    },
    {
      name: 'Red 3',
      filter: {
        color: 'red',
        value: 3,
      } as CardProps,
      target: {
        count: 1
      }
    },
    {
      name: 'Red >=15',
      filter: {
        color: 'red',
      } as CardProps,
      target: {
        sum: 15
      }
    },
    {
      name: 'Joker x4',
      filter: {
        name: 'joker',
      } as CardProps,
      target: {
        count: 4
      }
    }
  ] as Goal[])

  const updateGoal = (index: number, isComplete: boolean) => {
    document.querySelector(`.goal:nth-child(${index + 1})`).toggleAttribute('data-complete', isComplete)
  }

  useEffect(() => {
   goals.forEach((goal, index) => {
    const filter = goal.filter
    const filteredCards = inventory.filter((card) => {
      return (filter.color ? card.color === filter.color : true) &&
        (filter.name ? card.name === filter.name : true) &&
        (filter.value !== undefined ? card.value === filter.value : true)
    })

    if (goal.target.count !== undefined) {
      if (filteredCards.length >= goal.target.count) {
        updateGoal(index, true)
        return
      }

      updateGoal(index, false)
      return
    }

    if (goal.target.sum !== undefined) {
      const filteredSum = filteredCards.reduce((sum, current) => sum + current.value, 0)
      if (filteredSum >= goal.target.sum) {
        updateGoal(index, true)
        return
      }

      updateGoal(index, false)
    }
   }) 
  }, [inventory])

  const listItems = goals.map((goal, index) =>
    <span
      className="goal"
      key={index}>{goal.name}</span>
  )

  return (
    <div className="Goals">
        <div className="goal-items">
          {listItems}
        </div>
        <a href="#">Add Goal</a>
    </div>
  )
}
