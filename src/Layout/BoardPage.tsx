import React from 'react'
import BoardProvider from '../provider/BoardProvider'
import Board from '../Component/Board/Board'
import ActiveItemProvider from '../provider/ActiveItemProvider'

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