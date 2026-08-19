import { PropsWithChildren, ReactNode, useState } from "react";
import { ActiveItemContex } from "../context/ActiveItemContext";

type Props = PropsWithChildren

export default function ActiveItemProvider({children} : Props): ReactNode {

    const [activeId, setActiveId] = useState<string | null>(null)
    
    const seActiveItem = (id : string): void => {
        setActiveId(id)
    }

    return(
        <ActiveItemContex value={{seActiveItem, activeId}}>
            {children}
        </ActiveItemContex>
    )
}