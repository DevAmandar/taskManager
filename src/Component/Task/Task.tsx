import { ReactNode, useContext } from "react";
import { NavLink, Link } from "react-router";
import { BoardContext } from "../../context/BoardContext";

type Props = {
    boardIndex: number
    title: string
    description: string
    id: string
}
export default function Task({id, boardIndex, title, description}: Props): ReactNode {

    const { dispatchLists } = useContext(BoardContext)
    // console.log('dispatchLists = ', dispatchLists)

    const handleRemoveBoard = () => {
        // debugger
        dispatchLists({type:'remove_task', taskId:id})
    }
    return (
        <div className="rounded-md border-2 border-blue-100 bg-blue-200 w-[285px]">
            <div className="flex items-center justify-between p-2.5 border-b-2 border-blue-300">
                <Link to={`boardPage/${boardIndex}`}>
                    <h2 className="font-bold to-gray-800">{title}</h2>
                </Link>
                <button onClick={handleRemoveBoard} className="text-white bg-red-400 px-1 py-0.5 rounded-md font-medium text-sm cursor-pointer">Delete</button>
            </div>
            <p className="p-2.5">{description}</p>
        </div>
    )
}