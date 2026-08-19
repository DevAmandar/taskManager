import { ActionDispatch, createContext } from "react";
import { ListAction } from "../reducers/ListReducers";
import { BoardType } from "../type/board-type";

type ContextValue = {
    lists : BoardType[];
    dispatchLists: ActionDispatch<[action : ListAction]>
}

export const BoardContext = createContext<ContextValue>({
    lists: [],
    dispatchLists: () => {}
})