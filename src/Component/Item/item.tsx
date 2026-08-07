import { ReactNode, useContext } from "react";
import { ItemType } from "../../Type/itemType";
import { BoardContext } from "../../Context/BoardContext";
import { ListType } from "../../Type/listType";

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
        <div className="flex justify-around border-2">
            <span className="inline-block">{item.description}</span>
            <button onClick={handleRemove} className="border-2 border-red-600">delete</button>
        </div>
    )
}