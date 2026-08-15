import { useDraggable } from "@dnd-kit/react";
import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
    id: string
}>
export default function DraggableComponent({id, children}: Props): ReactNode {

    const {ref} = useDraggable({id})
    
    return(
        <div ref={ref}>
            {children}
        </div>
    )
}