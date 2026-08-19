import { createContext } from "react"

type ContextValue = {
    activeId : string | null
    seActiveItem: (id : string) => void

}

export const ActiveItemContex = createContext<ContextValue>({
    seActiveItem: () => {},
    activeId:null
})