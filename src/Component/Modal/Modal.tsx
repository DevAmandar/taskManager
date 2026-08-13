import { FormEvent, PropsWithChildren, ReactNode, RefObject, use, useContext, useRef } from "react";
import type { ListType } from "../../Type/list-type";
import { BoardContext } from "../../context/BoardContext";

type Props = PropsWithChildren<{
    list: ListType
    listIndex:number
    modalRef: RefObject<HTMLDialogElement | null>
}>
export default function Modal({ list, listIndex, modalRef, children }: Props): ReactNode {
    
    const formRef = useRef<HTMLFormElement>(null)

    const closeModal = () => {
        if (modalRef) modalRef.current?.close()
        formRef.current?.reset()

    }

    // submit
    const { dispatchLists } = useContext(BoardContext)
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title') as string
        const id = globalThis.crypto.randomUUID()

        dispatchLists({type:'add',listIndex:listIndex,itemId:id,title:title})
        formRef.current?.reset()
        modalRef.current?.close()
    }

    return (
        <dialog ref={modalRef} className="m-auto p-3 w-[300px] bg-gray-100 rounded-md">
            <h3 className="flex items-center justify-center mb-2.5 font-medium border-b-2 border-gray-300">{list.title}</h3>

            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" name="title" className="p-1.5 outline-2 outline-gray-300 w-full" />
                <div className="flex justify-end gap-1.5 mt-3">
                    <button type="button" onClick={closeModal} className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer">Cancel</button>
                    <button className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">Add</button>
                </div>
            </form>
        </dialog>
    )
}