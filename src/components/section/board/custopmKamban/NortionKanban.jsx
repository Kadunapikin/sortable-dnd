import React, { useState } from 'react'

export const NortionKanban = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50'>
        <Board />
    </div>
  )
}

const Board = () => {
    const [cards, setCards] = useState([]);
    return (
        <div className='flex h-screen w-full gap-3 overflow-scroll p-12'>
            Board
        </div>
    )
            
}


const Column = ({ title, headingColor, column, cards, setCards }) => {
    return (
        <div></div>
    )
}