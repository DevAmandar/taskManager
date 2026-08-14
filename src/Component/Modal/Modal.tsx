import { FormEvent, PropsWithChildren, ReactNode, RefObject, use, useContext, useRef } from "react";
import type { ListType } from "../../Type/list-type";
import { BoardContext } from "../../context/BoardContext";

type Props = PropsWithChildren<{
    list?: ListType
    listIndex?: number
    modalRef: RefObject<HTMLDialogElement | null>
    title: string
}>
export default function Modal({ title, list, listIndex, modalRef, children }: Props): ReactNode {

    const closeModal = () => {
        if (modalRef){
            modalRef.current?.close()
        }
             

    }

    return (
        <dialog ref={modalRef} className="m-auto p-3 w-[300px] bg-gray-100 rounded-md">
            <h3 className="flex items-center justify-center mb-2.5 font-medium border-b-2 border-gray-300">{title}</h3>
            {children}
        </dialog>
    )
}