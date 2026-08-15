import React from 'react'
import BoardProvider from '../provider/BoardProvider'
import Board from '../Component/Board/Board'
import ActiveItemProvider from '../provider/ActiveItemProvider'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { DragDropProvider } from '@dnd-kit/react'

const BoardPage = () => {

  const handleDragEnd=() => {
    console.log('dragged')
  }

  return (
    <BoardProvider>
      <ActiveItemProvider>
        <DragDropProvider onDragEnd={handleDragEnd}>
          <Board></Board>
        </DragDropProvider>
        <ToastContainer />
      </ActiveItemProvider>
    </BoardProvider>
  )
}

export default BoardPage