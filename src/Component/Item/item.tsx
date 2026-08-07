import { ReactNode } from "react";
import { ItemType } from "../../Type/itemType";

type Props={
    item:ItemType
}
export default function Item({item}:Props): ReactNode{

    return(
        <div className="flex justify-around border-2">
            <span className="inline-block">{item.description}</span>
            <button className="border-2 border-red-600">delete</button>
        </div>
    )
}