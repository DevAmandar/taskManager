// Item.tsx
import { ReactNode, useContext, useState } from "react";
import { ItemType } from "../../Type/item-type";
import { BoardContext } from "../../context/BoardContext";
import { ListType } from "../../Type/list-type";
import { MdDelete } from "react-icons/md";
import { ActiveItemContex } from "../../context/ActiveItemContext";
import { Bounce, toast } from "react-toastify";
import DraggableComponent from "../../drag and drop/drag/DraggableComponent";

type Props = {
    item: ItemType
    list: ListType
    boardIndex: number
}

export default function Item({ item, list, boardIndex }: Props): ReactNode {
    const [isRemoving, setIsRemoving] = useState(false)
    const { dispatchLists } = useContext(BoardContext)

    const handleRemove = () => {
        setIsRemoving(true)
        // بعد از انیمیشن، dispatch را صدا بزن
        setTimeout(() => {
            dispatchLists({ type: 'remove',boardIndex: boardIndex, listId: list.id, itemId: item.id })
            notify()
        }, 300) // هماهنگ با duration انیمیشن
    }

    // Active Item
    const { seActiveItem } = useContext(ActiveItemContex)
    const handleClickItem = () => {
        seActiveItem(item.id)
    }

    const { activeId } = useContext(ActiveItemContex)

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

    return (
        <DraggableComponent id={item.id} data={{...item, listId:list.id}} >
            <div
                onClick={handleClickItem}
                className={`
                    ${item.id === activeId ? 'outline-2 outline-blue-500' : ''} 
                    flex justify-between bg-white rounded-md p-1.5 m-2 cursor-pointer
                    transition-all duration-300 ease-in-out
                    ${isRemoving ? 'opacity-0 translate-x-[-20px] outline-none overflow-hidden' : ''}
                `}
            >
                <p>{item.description}</p>
                <MdDelete onClick={handleRemove} size={20}>delete</MdDelete>
            </div>
        </DraggableComponent>
    )
}