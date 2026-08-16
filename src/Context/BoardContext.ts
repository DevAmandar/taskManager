import { ActionDispatch, createContext } from "react";
import type { ListType } from "../Type/list-type";
import { ListAction } from "../reducers/ListReducers";

type ContextValue = {
    lists : ListType[][];
    dispatchLists: ActionDispatch<[action : ListAction]>
}

export const BoardContext = createContext<ContextValue>({
    lists: [],
    dispatchLists: () => {}
})