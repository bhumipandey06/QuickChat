import React from 'react'
import assets from "../assets/assets"

const Sidebar = ({selectedUser, setSelectedUser}) => {
  return (
    <div className='pb-5'>
        <div className='flex justify-between items-center'>
            <img src={assets.logo} alt="" />
        </div>
    </div>
  )
}

export default Sidebar