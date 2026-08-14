import React, { FormEvent, ReactNode, useContext, useRef } from 'react'
import { BoardContext } from '../../context/BoardContext'
import List from '../List/List'
import { MdOutlineModeEdit, MdAddCircleOutline } from "react-icons/md";
import Modal from '../Modal/Modal';
import CreatItemModal from '../CreatItemModal/CreatItemModal';
import CreatListModal from '../CreatListModal/CreatListModal';
export default function Board(): ReactNode {

  const { lists, dispatchLists } = useContext(BoardContext)

  const modalRef = useRef<HTMLDialogElement | null>(null)

  const showModal = () => {
    modalRef.current?.showModal()
  }

  //submit
  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    const id = globalThis.crypto.randomUUID()

    dispatchLists({ type: 'add_list', listId: id, title: title })
  }
  return (
    <>
      <div className='flex justify-between items-center m-6 p-3 rounded-md bg-gray-200 shadow-sm shadow-gray-400'>
        <h1 className='font-bold'>Board Title</h1>
        <div className='flex gap-4'>
          <MdOutlineModeEdit className='cursor-pointer text-icon' size={23} />
          <MdAddCircleOutline onClick={showModal} className='cursor-pointer text-icon' size={23} />
        </div>
      </div>
      <div className='flex gap-2.5 m-7'>
        {
          lists.map((list, listIndex) => (
            <div key={list.id}>
              <List list={list} listIndex={listIndex}></List>
            </div>
          ))
        }
      </div>
      <Modal title={`Add List`} modalRef={modalRef}>
        <CreatListModal modalRef={modalRef} />
      </Modal>
    </>
  )
}

