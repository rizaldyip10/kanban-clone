import React from 'react'
import KanbanCard from './kanban-card-component'

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

interface KanbanListProps {
    labelTitle: string;
    task?: TaskItems[];
    color: string;
}


interface KanbanBoardProps {
    list: KanbanListProps[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ list }) => {
    
  return (
    <div className='bg-[#F8F8F8] w-full h-full rounded-xl p-2 flex overflow-x-auto'>
        {
            list.map((item, index) => (
                <KanbanCard key={index} task={item?.task} labelTitle={item.labelTitle} color={item.color} />
            ))
        }
    </div>
  )
}

export default KanbanBoard