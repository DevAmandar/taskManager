import { ReactNode, useContext, useRef } from "react";
import Task from "../Component/Task/Task"; 
import Modal from "../modal/Modal";
import CreateTaskModal from "../modal/CreateTaskModal/CreateTaskModal";
import { BoardContext } from "../context/BoardContext";

export default function TasksPage(): ReactNode {

    const { lists } = useContext(BoardContext)
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const showModal = () => {
        modalRef.current?.showModal()
    }
    return (
        <>
            <header className="p-1">
                <div className="p-2.5 flex justify-between items-center rounded-md bg-gray-300 border-gray-200 border-2">
                    <h1 className="font-bold text-gray-800">Task managere</h1>
                    <button onClick={showModal} className="px-1 py-1.5 font-medium text-white bg-blue-400 rounded-md cursor-pointer">Create +</button>
                </div>
            </header>
            <div className="mt-20 ml-3.5 flex items-center  gap-2.5 flex-wrap">
                {lists.map((data, index) => (
                    <Task key={data.taskId} id={data.taskId} boardIndex={index} title={data.taskTitle} description={data.description}/>
                ))}
            </div>
            <Modal modalRef={modalRef} title="Create new task">
                <CreateTaskModal modalRef={modalRef}/>
            </Modal>
        </>
    )
}