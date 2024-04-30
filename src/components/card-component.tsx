import React from 'react'
import Tag from './tag-component'
import UserList from './user-list-component';
import checked from '../assets/Checked.png'
import unchecked from '../assets/Unchecked.png'

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

interface CardProps {
    title: string;
    description?: string;
    list?: ListItems[];
    tagDesc?: TagDescItems;
    userList?: UserItems[];
}

const Card: React.FC<CardProps> = ({ title, description, list, tagDesc, userList }) => {
  return (
    <div className='w-full h-fit bg-white p-4 flex flex-col gap-2 rounded-lg'>
        { userList && <UserList userList={userList} /> }
        <h1 className='text-base font-semibold font-sf-pro'>{ title }</h1>
        <p className='text-sm font-normal font-sf-pro text-[#5A5A65]'>{ description }</p>
        {
            list &&
            list.map((item, index) => (
                item.desc == 'Done' ? 
                <div className='flex w-full items-center gap-2' key={index}>
                    <img src={checked} alt="" className='w-4 h-4' />
                    <p className='line-through font-sf-pro text-sm text-[#4d4d4d] font-normal'>{item.listName}</p>
                </div> :
                <div className='flex w-full items-center gap-2' key={index}>
                    <img src={unchecked} alt="" className='w-4 h-4' />
                    <p className='font-sf-pro text-sm text-[#5A5A65] font-normal'>{item.listName}</p>
                </div>
            ))
        }
        { tagDesc && <Tag variant={tagDesc.variant} text={tagDesc.description} /> }

    </div>
  )
}

export default Card