import { ReactNode, useContext } from "react";
import { ItemType } from "../../Type/item-type";
import { BoardContext } from "../../context/BoardContext";
import { ListType } from "../../Type/list-type";
import { MdDelete } from "react-icons/md";

type Props={
    item:ItemType
    list:ListType
}
export default function Item({item, list}:Props): ReactNode{

    const {remove} = useContext(BoardContext)

    const handleRemove = () => {
        remove(list.id,item.id)
    }

    return(
        <div className="flex justify-between bg-white rounded-md p-1.5 m-1.5 cursor-pointer">
            <p className="">{item.description}</p>
            <MdDelete onClick={handleRemove} size={20}>delete</MdDelete>
        </div>
    )
}