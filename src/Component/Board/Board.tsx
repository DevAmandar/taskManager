import React, { FormEvent, ReactNode, useContext, useRef } from 'react'
import { BoardContext } from '../../context/BoardContext'
import List from '../List/List'
import { MdOutlineModeEdit, MdAddCircleOutline } from "react-icons/md";
import Modal from '../../modal/Modal';
import CreatItemModal from '../../modal/CreatItemModal/CreatItemModal';
import CreatListModal from '../../modal/CreatListModal/CreatListModal';

import { useParams } from "react-router";
import { Link } from "react-router";

type Props = {
  onClick : () => void
}
export default function Board( { onClick }: Props): ReactNode {

  let params = useParams();
  const boardIndex = parseInt(params.id!, 10)

  const { lists, dispatchLists } = useContext(BoardContext)

  const modalRef = useRef<HTMLDialogElement | null>(null)

  const showModal = () => {
    modalRef.current?.showModal()
  }

  const handleEditTitleBoard = () => {
    onClick()
  }
  return (
    <>
      <div className='flex justify-between items-center m-6 p-3 rounded-md bg-gray-200 shadow-sm shadow-gray-400'>
        <Link to="/test" className='font-bold'>{lists[boardIndex].taskTitle}</Link>
        <div className='flex gap-4'>
          <MdOutlineModeEdit onClick={handleEditTitleBoard} className='cursor-pointer text-icon' size={23} />
          <MdAddCircleOutline onClick={showModal} className='cursor-pointer text-icon' size={23} />
        </div>
      </div>
      <div className='flex gap-2.5 m-7'>
        {
          lists[boardIndex].lists.map((list, listIndex) => (
            <div key={list.id}>
              <List boardIndex={boardIndex} list={list} listIndex={listIndex}></List>
            </div>
          ))
        }
      </div>
      <Modal title={`Add List`} modalRef={modalRef}>
        <CreatListModal modalRef={modalRef} boardIndex={boardIndex}/>
      </Modal>
    </>
  )
}

