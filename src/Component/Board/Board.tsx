import React, { ReactNode, useContext } from 'react'
import { BoardContext } from '../../Context/BoardContext'
import List from '../List/list'

export default function Board(): ReactNode {
  const { lists, add } = useContext(BoardContext)

  const handleAdd = () => {
    add()
  }

  return (
    <div>
      <div className='flex justify-center items-center m-6'>
        <button onClick={handleAdd} className='border-2 border-blue-700'>add</button>
      </div>
      <div className='flex justify-center items-center gap-2.5'>
        {
          lists.map(list => (
            <div key={list.id} className='border-2 w-[600px] h-[150px]'>
              <List list={list}></List>
            </div>
          ))
        }
      </div>
    </div>
  )
}

