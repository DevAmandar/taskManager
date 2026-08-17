import { ActionDispatch, createContext } from "react";
import type { ListType } from "../Type/list-type";
import { ListAction } from "../reducers/ListReducers";
import { BoardType } from "../Type/board-type";

type ContextValue = {
    lists : BoardType[];
    dispatchLists: ActionDispatch<[action : ListAction]>
}

export const BoardContext = createContext<ContextValue>({
    lists: [],
    dispatchLists: () => {}
})