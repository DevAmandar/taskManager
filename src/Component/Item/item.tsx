import { ReactNode, useContext, useRef } from "react";
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
}

export default function Item({ item, list }: Props): ReactNode {
    // Remove
    const { dispatchLists } = useContext(BoardContext)

    const handleRemove = () => {
        dispatchLists({ type: 'remove', listId: list.id, itemId: item.id })
        notify()
    }

    // Active Item
    const { seActiveItem } = useContext(ActiveItemContex)

    const handleClickItem = () => {
        seActiveItem(item.id)
    }

    const { activeId } = useContext(ActiveItemContex)
    // toast
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
        <DraggableComponent id={item.id}>
            <div
                onClick={handleClickItem}
                className={`${item.id === activeId ? 'outline-2 outline-blue-500' : ''} flex justify-between bg-white rounded-md p-1.5 m-2 cursor-pointer`}
            >
                <p className="select-none">{item.description}</p>
                <MdDelete onClick={handleRemove} size={20}>delete</MdDelete>
            </div>
        </DraggableComponent>

    )
}