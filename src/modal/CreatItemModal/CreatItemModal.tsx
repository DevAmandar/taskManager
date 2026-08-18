import { FormEvent, PropsWithChildren, ReactNode, RefObject, useContext, useRef, useState } from "react";
import Modal from "../../modal/Modal";
import { ListType } from "../../Type/list-type";
import { BoardContext } from "../../context/BoardContext";
import { TitleSchema } from "../../schemas/title-schema";

type Props = PropsWithChildren<{
    listIndex: number
    modalRef: RefObject<HTMLDialogElement | null>
    boardIndex: number
}>
export default function CreatItemModal({ listIndex, modalRef, boardIndex }: Props): ReactNode {

    const [showError, setShowError] = useState<string | null>()
    const formRef = useRef<HTMLFormElement>(null)

    const closeModal = () => {
        if (modalRef) modalRef.current?.close()
        formRef.current?.reset()
        setShowError(null)

    }

    // submit
    const { dispatchLists } = useContext(BoardContext)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title') as string
        const id = globalThis.crypto.randomUUID()
        if (validation(title)) {
            dispatchLists({ type: 'add_item', boardIndex: boardIndex, listIndex: listIndex, itemId: id, title: title })
            formRef.current?.reset()
            modalRef.current?.close()
            setShowError(null)
        }
    }
    const validation = (title: string): boolean => {
        const { data, error } = TitleSchema.safeParse(title)
        if (error) {
            console.log(error.issues[0].message)
            setShowError(error.issues[0].message)
            return false
        }
        return true
    }
    return (
        <form ref={formRef} onSubmit={handleSubmit} className="p-1.5">
            <input type="text" name="title" className="p-1.5 my-1 outline-2 outline-gray-300 rounded-md w-full" />
            <p className={`${showError ? 'visible' : 'invisible'} text-red-500 font-medium h-6`}>{showError || ' '}</p>
            <div className="flex justify-end gap-1.5 mt-3">
                <button type="button" onClick={closeModal} className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer">Cancel</button>
                <button className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">Add</button>
            </div>
        </form>
    )
}