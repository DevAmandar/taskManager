import { ReactNode } from "react";
import type { ListType } from "../../Type/listType";
import Item from "../Item/item";

type Props = {
    list: ListType
}

export default function List({ list }: Props): ReactNode {
    return (
        <div className="max-w-[300px]">
            <h3>{list.title}</h3>
            <div className="">
                {list.items.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}