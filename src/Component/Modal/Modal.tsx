import { FormEvent, PropsWithChildren, ReactNode, RefObject, use, useContext, useRef } from "react";
import type { ListType } from "../../Type/list-type";
import { BoardContext } from "../../context/BoardContext";
import { IoMdClose } from "react-icons/io";

type Props = PropsWithChildren<{
    title: string
    modalRef: RefObject<HTMLDialogElement | null>
    onSubmit: (formData: FormData) => void
}>
export default function Modal({ title, modalRef, onSubmit }: Props): ReactNode {

    const formRef = useRef<HTMLFormElement>(null)
    const handleCloseModal = () => {
        if (modalRef) {
            formRef.current?.reset()
            modalRef.current?.close()
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        onSubmit(formData)
        formRef.current?.reset()
        modalRef.current?.close()
    }


    return (
        <dialog ref={modalRef} className="m-auto w-[300px] bg-gray-100 rounded-md">
            <div className="flex items-center justify-between my-2.5 font-medium border-b-2 border-gray-300">
                <h3 className="mx-3" >{title}</h3>
                <IoMdClose onClick={handleCloseModal} size={18} className="mx-3 cursor-pointer" />
            </div>
            <form ref={formRef} className="p-3" onSubmit={handleSubmit}>
                <input type="text" name="title" className="p-1.5 outline-2 outline-gray-300 w-full" />
                <div className="flex justify-end gap-1.5 mt-3">
                    <button type="button" onClick={handleCloseModal} className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer">Cancel</button>
                    <button className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">Add</button>
                </div>
            </form>
        </dialog>
    )
}