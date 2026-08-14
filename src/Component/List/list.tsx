import { ReactNode, RefObject, useContext, useRef } from "react";
import type { ListType } from "../../Type/list-type";
import Item from "../Item/Item";
import { MdOutlineModeEdit, MdAddCircleOutline, MdDeleteOutline } from "react-icons/md";
import Modal from "../Modal/Modal";
import CreatItemModal from "../CreatItemModal/CreatItemModal";
import { BoardContext } from "../../context/BoardContext";

type Props = {
    list: ListType
    listIndex:number
}

export default function List({ list, listIndex }: Props): ReactNode {

    const { dispatchLists } = useContext(BoardContext)

    const handleDeleteList = () => {
        dispatchLists({type:'remove_list', listIndex:listIndex})
    }
    //Modal
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const showModal =() => {
        modalRef.current?.showModal()
    }
    const handleSubmit = (formData : FormData) => {
        const title = formData.get('title') as string
        const id = globalThis.crypto.randomUUID()

        dispatchLists({type:'add_item', itemId:id, listIndex:listIndex, title:title})
    }
    return (
        <div className="w-[300px] p-3 bg-gray-200 rounded-md shadow-sm shadow-gray-400">
            <div className='flex justify-between items-center'>
                <h3 className='font-medium'>{list.title}</h3>
                <div className='flex gap-2'>
                    <MdOutlineModeEdit className="cursor-pointer text-icon" size={18} />
                    <MdAddCircleOutline onClick={showModal} className="cursor-pointer text-icon" size={18} />
                    <MdDeleteOutline onClick={handleDeleteList} className="cursor-pointer text-icon" size={18}/> 
                </div>
            </div>
            <div>
                {list.items.map(item => (
                    <Item key={item.id} item={item} list={list} />
                ))}
            </div>
            <Modal title={`Add Item to ${list.title}`} modalRef={modalRef} onSubmit={handleSubmit} />
        </div>
    )
}