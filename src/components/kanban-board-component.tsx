import React from 'react'
import KanbanCard from './kanban-card-component'

interface ListItems {
  desc: 'Done' | 'Ongoing';
  listName: string;
}

interface UserItems {
  imgURL: string
}

interface TagDescItems {
  variant: 'red' | 'green' | 'purple' | 'white' | 'gray' ;
  description: string;
}

interface TaskItems {
  title: string;
  description: string;
  list: ListItems[];
  userList: UserItems[]
  note: TagDescItems
}

interface KanbanListProps {
    labelTitle: string;
    task?: TaskItems[] | undefined;
    color: 'red' | 'green' | 'purple' | 'white' | 'gray' | string;
}


interface KanbanBoardProps {
    list: KanbanListProps[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ list }) => {
    
  return (
    <div className='bg-[#F8F8F8] w-full h-full rounded-xl p-2 flex overflow-x-auto'>
        {
            list.map((item, index) => (
                <KanbanCard key={index} task={item.task} labelTitle={item.labelTitle} color={item.color} />
            ))
        }
    </div>
  )
}

export default KanbanBoard