import { createContext } from "react"
import { ItemType } from "../Type/item-type"

type ContextValue = {
    activeId : string | null
    seActiveItem: (id : string) => void

}

export const ActiveItemContex = createContext<ContextValue>({
    seActiveItem: () => {},
    activeId:null
})