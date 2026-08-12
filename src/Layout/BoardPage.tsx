import React from 'react'
import BoardProvider from '../Provider/BoardProvider'
import Board from '../Component/Board/Board'
import ActiveItemProvider from '../Provider/ActiveItemProvider'

const BoardPage = () => {
  return (
    <BoardProvider>
      <ActiveItemProvider>
        <Board></Board>
      </ActiveItemProvider>
    </BoardProvider>
  )
}

export default BoardPage