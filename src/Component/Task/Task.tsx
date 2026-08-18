import { ReactNode, useContext, useRef, useState } from "react";
import { NavLink, Link } from "react-router";
import { BoardContext } from "../../context/BoardContext";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import Modal from "../../modal/Modal";
import EditTaskModal from "../../modal/EditTaskModal/EditTaskModal";

type Props = {
    boardIndex: number
    title: string
    description: string
    id: string
}
export default function Task({ id, boardIndex, title, description }: Props): ReactNode {

    const modalRef=useRef<HTMLDialogElement | null>(null)

    const [isRemoving, setIsRemoving] = useState(false)

    const { dispatchLists } = useContext(BoardContext)

    const handleRemoveBoard = () => {
        // debugger
        setIsRemoving(true)

        setTimeout(() => {
            dispatchLists({ type: 'remove_task', taskId: id })
            notify()
        }, 300)
    }

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

    const showModal = () => {
        modalRef.current?.showModal()
    }
    return (
        <>
            <div className={`rounded-md border-2 border-blue-100 bg-blue-200 w-[285px] 
        transition-all duration-300 ease-in-out 
        ${isRemoving ? 'opacity-0 translate-x-[-15px] outline-none overflow-hidden' : ''}
        `}>
                <div className="flex items-center justify-between p-2.5 border-b-2 border-blue-300">
                    <Link to={`boardPage/${boardIndex}`}>
                        <h2 className="font-bold to-gray-800">{title}</h2>
                    </Link>
                    <div className="flex justify-center items-center gap-2.5">
                        <MdOutlineModeEdit onClick={showModal} size={20} className="cursor-pointer" />
                        <MdDeleteOutline onClick={handleRemoveBoard} size={20} className="cursor-pointer" />
                    </div>
                </div>
                <p className="p-2.5">{description}</p>
            </div>
            <Modal title="Edit Task" modalRef={modalRef}>
                <EditTaskModal modalRef={modalRef} boardIndex={boardIndex}/>
            </Modal>
        </>
    )
}