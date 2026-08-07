import React, { ReactNode, useContext } from 'react'
import { BoardContext } from '../Context/BoardContext'


export default function Board() : ReactNode {
  const { lists } = useContext(BoardContext)

  return (
    <div>
      {
        lists.map(list => (
          <h3>{list.title}</h3>
        ))
      }
    </div>
  )
}

