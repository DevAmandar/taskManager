import { FormEvent, PropsWithChildren, ReactNode, RefObject, use, useContext, useRef } from "react";
import type { ListType } from "../../Type/list-type";
import { BoardContext } from "../../context/BoardContext";
import { IoMdClose } from "react-icons/io";

type Props = PropsWithChildren<{
    list?: ListType
    listIndex?: number
    title: string
    modalRef: RefObject<HTMLDialogElement | null>
    onCancel?: () => void
}>
export default function Modal({ title, list, listIndex, modalRef, children, onCancel }: Props): ReactNode {

    const closeModal = () => {
        if (modalRef) {
            modalRef.current?.close()

            if(onCancel) onCancel()
        }


    }

    return (
        <dialog ref={modalRef} className="m-auto w-[300px] bg-gray-100 rounded-md">
            <div className="flex items-center justify-between my-2.5 font-medium border-b-2 border-gray-300">
                <h3 className="mx-3" >{title}</h3>
                <IoMdClose onClick={closeModal} size={18} className="mx-3 cursor-pointer" />
            </div>
            <div className="p-3">
            {children}
            </div>
        </dialog>
    )
}