import React from 'react'
import { menuRoutes } from '../../router'
import { NavLink } from 'react-router-dom'

export const SidebarMenuItem = () => {
  return (
    menuRoutes.map(option =>(
        <NavLink
        key= {option.to}
        to={option.to}
        className={
          ({isActive})=>
          isActive
          ? 'flex justify-center items-center bg-gray-800 rouded-md p-2 transition-colors'
          : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors'
        }
        >
          <i className={`${option.icon} text-2xl mr-4 text-indigo-400`}/>
          <div className='flex flex-col flex-grow'>
            <span className='text-white text-lg font-semibold'>
              {option.title}
            </span>
            <span className='text-gray-400'>
              {option.description}
            </span>
          </div>
        </NavLink>
      ))
  )
}
