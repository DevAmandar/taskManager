import { ReactNode, useContext, useRef } from "react";
import { ItemType } from "../../Type/item-type";
import { BoardContext } from "../../context/BoardContext";
import { ListType } from "../../Type/list-type";
import { MdDelete } from "react-icons/md";
import { ActiveItemContex } from "../../context/ActiveItemContext";

type Props = {
    item: ItemType
    list: ListType
}

export default function Item({ item, list }: Props): ReactNode {
    // Remove
    const { dispatchLists } = useContext(BoardContext)

    const handleRemove = () => {
        dispatchLists({type:'remove', listId:list.id, itemId:item.id})
    }

    // Active Item
    const { seActiveItem } = useContext(ActiveItemContex)
    
    const handleClickItem = () => {
        seActiveItem(item.id)  
    }

    const { activeId } = useContext(ActiveItemContex)

    //ref
    const testRef = useRef(0)
    return (
        <div 
            onClick={handleClickItem}  
            className={`${ item.id === activeId ? 'outline-2 outline-blue-500' : ''} flex justify-between bg-white rounded-md p-1.5 m-2 cursor-pointer`}
        >
            <p>{item.description}</p>
            <MdDelete onClick={handleRemove} size={20}>delete</MdDelete>
        </div>
    )
}