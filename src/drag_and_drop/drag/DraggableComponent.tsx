import { useDraggable } from "@dnd-kit/react";
import { PropsWithChildren, ReactNode } from "react";
import { ItemType } from "../../type/item-type";

type DraggableData = ItemType & { listId: string}

type Props = PropsWithChildren<{
    id: string
    data: DraggableData
}>
export default function DraggableComponent({id, children, data}: Props): ReactNode {

    const {ref} = useDraggable({
        id, 
        data : data
    })
    
    return(
        <div ref={ref}>
            {children}
        </div>
    )
}