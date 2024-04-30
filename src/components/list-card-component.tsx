import React from 'react'
import Label from './label-component'
import Card from './card-component'

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
  userList?: UserItems[] | undefined
  note?: TagDescItems
}

interface ListCardProps {
    labelTitle: string;
    task?: TaskItems[];
    color: string;
}

const ListCard: React.FC<ListCardProps> = ({ labelTitle, task, color }) => {
  return (
    <div className='flex flex-col gap-3 w-full'>
        <Label text={labelTitle} variant={color} />
        {
            task?.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} tagDesc={item.note} list={item.list} userList={item.userList} />
            ))
        }
    </div>
  )
}

export default ListCard