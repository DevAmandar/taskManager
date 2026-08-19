import { ReactNode, RefObject, useContext, useRef, useState } from "react";
import type { ListType } from "../../Type/list-type";
import Item from "../item/item";
import { MdOutlineModeEdit, MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import Modal from "../../modal/Modal";
import CreatItemModal from "../../modal/CreatItemModal/CreatItemModal";
import { BoardContext } from "../../context/BoardContext";
import { Bounce, toast } from "react-toastify";
import DroppableComponent from "../../drag_and_drop/drop/DroppableComponent";
import EditTitleListModal from "../../modal/EditTitleListModal/EditTitleListModal";

type Props = {
    list: ListType
    listIndex: number
    boardIndex: number
}

export default function List({ list, listIndex, boardIndex }: Props): ReactNode {

    const [isRemoving, setIsRemoving] = useState(false)

    const modalRef = useRef<HTMLDialogElement | null>(null)
    const editModalRef = useRef<HTMLDialogElement | null>(null)

    const { dispatchLists } = useContext(BoardContext)

    // delete
    const handleDeleteList = () => {
        setIsRemoving(true)

        setTimeout(() => {
            dispatchLists({ type: 'remove_list', boardIndex: boardIndex, listIndex: listIndex })
            notify()

        }, 300)
    }
    //toastify
    const notify = () => toast.success('successfully deletes', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    //Modal
    const showModal = () => {
        modalRef.current?.showModal()
    }

    //Modal Edit
    const showModalEdit = () => {
        editModalRef.current?.showModal()
    }
    return (
        <DroppableComponent id={list.id}>
            <div className={`w-[300px] p-3 bg-gray-200 rounded-md shadow-sm shadow-gray-400 transition-all duration-300 ease-in-out  
                ${isRemoving ? ' opacity-0 translate-x-[-15px] outline-none overflow-hidden ' : ''}`}>
                <div className='flex justify-between items-center'>
                    <h3 className='font-medium'>{list.title}</h3>
                    <div className='flex gap-2'>
                        <MdOutlineModeEdit onClick={showModalEdit} className="cursor-pointer text-icon" size={18} />
                        <MdAddCircleOutline onClick={showModal} className="cursor-pointer text-icon" size={18} />
                        <MdDeleteOutline onClick={handleDeleteList} className="cursor-pointer text-icon" size={18} />
                    </div>
                </div>
                <div>
                    {list.items.map(item => (
                        <Item boardIndex={boardIndex} key={item.id} item={item} list={list} />
                    ))}
                </div>
                <Modal title={`Add Item to ${list.title}`} modalRef={modalRef}>
                    <CreatItemModal boardIndex={boardIndex} listIndex={listIndex} modalRef={modalRef} />
                </Modal>

                <Modal title={`Edit title list`} modalRef={editModalRef}>
                    <EditTitleListModal boardIndex={boardIndex} listIndex={listIndex} editModalRef={editModalRef} />
                </Modal>
            </div>
        </DroppableComponent>
    )
}