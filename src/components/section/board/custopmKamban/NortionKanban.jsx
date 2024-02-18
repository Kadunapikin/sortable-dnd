import React from 'react'

export const NortionKanban = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50'>
        <Board />
    </div>
  )
}

const Board = () => {
    return (
        <div className='flex h-screen w-full gap-3 overflow-scroll p-12'>
            Board
        </div>
    )
            
}
