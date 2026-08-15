import React, { useContext } from 'react'
import BoardProvider from '../provider/BoardProvider'
import Board from '../Component/Board/Board'
import ActiveItemProvider from '../provider/ActiveItemProvider'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { DragDropProvider, DragEndEvent } from '@dnd-kit/react'
import { useConstant } from '@dnd-kit/react/hooks'
import  {BoardContext}  from '../context/BoardContext'
import { ItemType } from '../Type/item-type'

const BoardPage = () => {

  const { dispatchLists } = useContext(BoardContext)

  const handleDragEnd = (e: DragEndEvent) => {

    if (e.canceled) return;

    const { target, source } = e.operation

    if (target?.id && source?.id) {
      const itemData=source.data as ItemType & {listId: string}
      const itemId = source.id as string
      const listId = target.id as string
      const formListId = itemData.listId as string
      console.log(itemData)
      dispatchLists({type:'move_item', item:itemData, itemId: itemId, toListId: listId, fromListId:formListId})
    }
  }

  return (
      <ActiveItemProvider>
        <DragDropProvider onDragEnd={handleDragEnd}>
          <Board></Board>
        </DragDropProvider>
        <ToastContainer />
      </ActiveItemProvider>
  )
}

export default BoardPage

