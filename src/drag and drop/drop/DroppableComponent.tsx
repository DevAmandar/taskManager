import { useDroppable } from "@dnd-kit/react";
import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    id: string
}>

export default function DroppableComponent({id, children}:Props): ReactNode {
    const { ref } = useDroppable({id})

    return(
        <div ref={ref}>
            {children}
        </div>
    )
}