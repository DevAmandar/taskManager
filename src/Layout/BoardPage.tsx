import React from 'react'
import BoardProvider from '../provider/BoardProvider'
import Board from '../Component/Board/Board'
import ActiveItemProvider from '../provider/ActiveItemProvider'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const BoardPage = () => {


  return (
    <BoardProvider>
      <ActiveItemProvider>
        <Board></Board>
        <ToastContainer/>
      </ActiveItemProvider>
    </BoardProvider>
  )
}

export default BoardPage