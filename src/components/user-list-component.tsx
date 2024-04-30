import React from 'react'

interface UserListItems {
  imgURL?: string
}
interface UserListProps {
    userList?: UserListItems[];
}

const UserList: React.FC<UserListProps> = ({ userList }) => {
  return (
    <div className='flex gap-1'>
        {
            userList?.map((item, index) => (
                <img key={index} src={item.imgURL} alt="" className='w-4 h-4 rounded-full'/>
            ))
        }
    </div>
  )
}

export default UserList