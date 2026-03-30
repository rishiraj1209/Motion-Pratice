'use client'
import React from 'react'
import Sidebar from './Sidebar'

const MainSidebar = () => {
  return (
    <div className='h-screen w-full flex items-center'>
      <Sidebar/>
      <div className='h-full flex-1 bg-neutral-200'>

      </div>
    </div>
  )
}

export default MainSidebar
