import React, { ReactNode, useContext } from 'react'
import { BoardContext } from '../../context/BoardContext'
import List from '../List/List'
import { MdOutlineModeEdit, MdAddCircleOutline } from "react-icons/md";

export default function Board(): ReactNode {
  const { lists, add } = useContext(BoardContext)

  const handleAdd = () => {
    add()
  }

  return (
    <>
      <div className='flex justify-between items-center m-6 p-3 rounded-md bg-gray-200 shadow-sm shadow-gray-400'>
        <h1 className='font-bold'>Board Title</h1>
        <div className='flex gap-4'>
          <MdOutlineModeEdit className='cursor-pointer' size={23} />
          <MdAddCircleOutline className='cursor-pointer' onClick={handleAdd} size={23}>add</MdAddCircleOutline>
        </div>
      </div>
      <div className='flex gap-2.5 m-7'>
        {
          lists.map(list => (
            <div key={list.id}>
              <List list={list}></List>
            </div>
          ))
        }
      </div>
    </>
  )
}

