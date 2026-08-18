import React, { useContext, useRef } from 'react'
import BoardProvider from '../provider/BoardProvider'
import Board from '../Component/Board/Board'
import ActiveItemProvider from '../provider/ActiveItemProvider'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { DragDropProvider, DragEndEvent } from '@dnd-kit/react'
import { useConstant } from '@dnd-kit/react/hooks'
import { BoardContext } from '../context/BoardContext'
import { ItemType } from '../Type/item-type'
import { Outlet, useParams } from 'react-router'
import Modal from '../modal/Modal'
import EditTitleTaskModal from '../modal/EditTitleTaskModal/EditTitleTaskModal'

const BoardPage = () => {

  // param
  let params = useParams();
  const boardIndex = parseInt(params.id!, 10)

  const { dispatchLists } = useContext(BoardContext)
  
  const handleDragEnd = (e: DragEndEvent) => {

    if (e.canceled) return;

    const { target, source } = e.operation

    if (target?.id && source?.id) {
      const itemData = source.data as ItemType & { listId: string }
      const itemId = source.id as string
      const listId = target.id as string
      const formListId = itemData.listId as string
      dispatchLists({ type: 'move_item',boardIndex: boardIndex, item: itemData, itemId: itemId, toListId: listId, fromListId: formListId })
    }
  }

  const modalRef = useRef<HTMLDialogElement | null>(null)
  const handleEditTitleBoard = () => {
    modalRef.current?.showModal()
  }
  return (
    <ActiveItemProvider>
      <DragDropProvider onDragEnd={handleDragEnd}>

        <Board onClick={handleEditTitleBoard}></Board>
        <Modal modalRef={modalRef} title='Edit title task'>
          <EditTitleTaskModal modalRef={modalRef} boardIndex={boardIndex} />
        </Modal>
      </DragDropProvider>
    </ActiveItemProvider>
  )
}

export default BoardPage

