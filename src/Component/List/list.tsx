import { ReactNode, useRef } from "react";
import type { ListType } from "../../Type/list-type";
import Item from "../Item/Item";
import { MdOutlineModeEdit, MdAddCircleOutline } from "react-icons/md";
import Modal from "../Modal/Modal";

type Props = {
    list: ListType
    listIndex:number
}

export default function List({ list, listIndex }: Props): ReactNode {

    //Modal
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const showModal =() => {
        modalRef.current?.showModal()
    }
    return (
        <div className="w-[300px] p-3 bg-gray-200 rounded-md shadow-sm shadow-gray-400">
            <div className='flex justify-between items-center'>
                <h3 className='font-medium'>{list.title}</h3>
                <div className='flex gap-2'>
                    <MdOutlineModeEdit className="cursor-pointer" size={18} />
                    <MdAddCircleOutline onClick={showModal} className="cursor-pointer" size={18}>add</MdAddCircleOutline>
                </div>
            </div>
            <div>
                {list.items.map(item => (
                    <Item key={item.id} item={item} list={list} />
                ))}
            </div>
            <Modal modalRef={modalRef} list={list} listIndex={listIndex}></Modal>
        </div>
    )
}