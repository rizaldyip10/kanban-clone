import React from 'react'
import ListCard from './list-card-component'

interface ListItems {
  desc: string;
  listName: string;
}

interface UserItems {
  imgURL: string
}

interface TagDescItems {
  variant: string;
  description: string;
}

interface TaskItems {
  title: string;
  description?: string;
  list?: ListItems[];
  userList?: UserItems[]
  note?: TagDescItems
}

interface KanbanCardProps {
    labelTitle: string;
    task?: TaskItems[];
    color: string;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ labelTitle, task, color }) => {
  return (
    <div className='w-[308px] h-[301px] p-3 flex gap-3'>
        <ListCard labelTitle={labelTitle} task={task} color={color} />
    </div>
  )
}

export default KanbanCard