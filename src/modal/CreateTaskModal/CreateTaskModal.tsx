import { FormEvent, PropsWithChildren, ReactNode, RefObject, useContext, useRef } from "react";
import { BoardContext } from "../../context/BoardContext";

type Props = PropsWithChildren<{
    modalRef: RefObject<HTMLDialogElement | null>
}>

export default function CreateTaskModal({ modalRef }: Props): ReactNode {

    const formRef = useRef<HTMLFormElement>(null)

    const closeModal = () => {
        if (modalRef) modalRef.current?.close()
        formRef.current?.reset()

    }

    // submit
    const { dispatchLists } = useContext(BoardContext)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const id = globalThis.crypto.randomUUID()

        console.log('Dispatching add_task with:', { type: 'add_task', taskId: id, taskTitle: title, description })

        try {
            dispatchLists({ type: 'add_task', taskId: id, taskTitle: title, description })
            console.log('Dispatch completed')
        } catch (error) {
            console.error('Dispatch error:', error)
        }

        formRef.current?.reset()
        modalRef.current?.close()
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="p-1.5">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" className="p-1.5 outline-2 outline-gray-300 rounded-md w-full" />

            <label htmlFor="description">Description:</label>
            <input type="text" name="description" className="p-1.5 outline-2 outline-gray-300 rounded-md w-full" />
            <div className="flex justify-end gap-1.5 mt-3">
                <button type="button" onClick={closeModal} className="py-1.5 px-2 text-gray-950 bg-gray-300 rounded-md font-medium cursor-pointer">Cancel</button>
                <button className="py-1.5 px-2 text-white bg-blue-400 rounded-md font-medium cursor-pointer">Add</button>
            </div>
        </form>
    )
}