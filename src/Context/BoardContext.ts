import { createContext } from "react";
import type { ListType } from "../Type/listType";

type ContextValue = {
    lists : ListType[];
    add : () => void;
    remove : (listId:string, itemId:string) => void;
}

export const BoardContext = createContext<ContextValue>({
    lists: [],
    add: () => {},
    remove: () => {}
})