import React, { useState } from 'react'
import { FaFire } from 'react-icons/fa';
import { FiTrash } from 'react-icons/fi';

export const NortionKanban = () => {
  return (
    <div className='h-screen w-full bg-neutral-900 text-neutral-50'>
        <Board />
    </div>
  )
}

const Board = () => {
    const [cards, setCards] = useState(DEFAULT_CARDS);
    return (
        <div className='flex h-screen w-full gap-3 overflow-scroll p-12'>
            <Column 
                title='Backlog'
                column='backlog'
                headingColor='text-neautral-500'
                cards={cards}
                setCards={setCards}
            />
            <Column 
                title='TODO'
                column='todo'
                headingColor='text-yellow-200'
                cards={cards}
                setCards={setCards}
            />
            <Column 
                title='In Progress'
                column='doing'
                headingColor='text-blue-200'
                cards={cards}
                setCards={setCards}
            />
            <Column 
                title='Complete'
                column='done'
                headingColor='text-emerald-200'
                cards={cards}
                setCards={setCards}
            />
            <BurnBarell setCards={setCards} />

        </div>
    )
}


const Column = ({ title, headingColor, column, cards, setCards }) => {
    const [active, setActive] = useState(false);
    const filteredCards = cards.filter((c) => c.column === column);
    return (
        <div className='w-56 shrink-0'>
            <div className='mb-3 flex items-center justify-between'>
                <h3 className={`font-medium ${headingColor}`}>
                    {title}
                </h3>
                <span className='rounded text-sm text-neutral-400'>
                    {filteredCards.length}
                </span>
            </div>
            <div className={`h-full w-full transition-colors ${!active ? "bg-neutral-800/50" : "bg-neutral-800/0"
            }`}
            >
                {filteredCards.map((c) => {
                    return <Card key={c.id} {...c}/>;
                })}
            </div>
        </div>
    )
}

const Card = ({ title, id, column }) => {
    return (
        <>
            <DropIndicator before={id} column={column} />
            <div
            draggable='true' 
            className='cursor-grab rounded before border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'
            >
                <p className='text-sm text-neutral-100'>{title}</p>
            </div>
        </>
    )
}

const DropIndicator = ({ beforeId, column }) => {
    return (
        <div 
            data-before={beforeId || "-1"}
            data-column={column}
            className='my-0.5 h-0.5 w-full bg-violet-400 opacity-0'>
        </div>
    )
}

const BurnBarell = ({ setCards }) => {
    const [active, setActive] = useState(false);
    return (
        <div className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
            active 
            ? "border-red-800 bg-red-800/20 text-red-500" 
            : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
            }`}
            >{active ? <FaFire className="animate-bounce" /> : <FiTrash />}</div>
    )
}


const DEFAULT_CARDS = [
    //Backlog
    {
        id: '1',
        title: 'Look into render bug in dashboard',
        column: 'backlog'
    },
    {
        id: '2',
        title: 'SOX compliance checklist',
        column: 'backlog'
    },
    {
        id: '3',
        title: '[SPIKE] migrate to Azure',
        column: 'backlog'
    },
    {
        id: '4',
        title: 'Document Notification service',
        column: 'backlog'
    },
    //TODO
    {
        id: '5',
        title: 'Research DB options for new microservice',
        column: 'todo'
    },
    {
        id: '6',
        title: 'Postmortem for outage',
        column: 'todo'
    },
    {
        id: '7',
        title: 'sync with product on Q3 Roadmap',
        column: 'todo'
    },
    //DOING...
    {
        id: '8',
        title: 'Implement new feature',
        column: 'doing'
    },
    {
        id: '9',
        title: 'Refactor content providers',
        column: 'doing'
    },
    //DONE
    {
        id: '10',
        title: 'Setup DD dashboard for lamba listeners',
        column: 'done'
    }
]
