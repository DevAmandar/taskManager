import { FormEvent, PropsWithChildren, ReactNode, RefObject, use, useContext, useRef } from "react";
import type { ListType } from "../Type/list-type";
import { BoardContext } from "../context/BoardContext";
import { IoMdClose } from "react-icons/io";

type Props = PropsWithChildren<{
    title: string
    modalRef: RefObject<HTMLDialogElement | null>
}>
export default function Modal({ title, children, modalRef }: Props): ReactNode {

    return (
        <dialog ref={modalRef} className="m-auto w-[300px] bg-gray-100 rounded-md">
            <div className="flex items-center justify-center py-1.5 mb-2 font-medium border-b-2 border-gray-300">
                <h3 >{title}</h3>
            </div>
            {children}
        </dialog>
    )
}