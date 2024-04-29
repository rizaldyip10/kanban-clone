import React from 'react'
import ListCard from './list-card-component'

interface KanbanCardProps {
    labelTitle: string;
    task: object[];
    color: 'red' | 'green' | 'purple' | 'white' | 'gray' | string;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ labelTitle, task, color }) => {
  return (
    <div className='w-[308px] h-[301px] p-3 flex gap-3'>
        <ListCard labelTitle={labelTitle} task={task} color={color} />
    </div>
  )
}

export default KanbanCard