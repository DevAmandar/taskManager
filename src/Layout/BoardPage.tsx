import React from 'react'
import BoardProvider from '../Provider/BoardProvider'
import Board from '../Component/Board/Board'
const BoardPage = () => {
  return (
    <BoardProvider>
        <Board></Board>
    </BoardProvider>
  )
}

export default BoardPage