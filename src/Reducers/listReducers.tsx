import Item from "../Component/Item/item"
import { ListType } from "../Type/listType"

type Action =
    {
        type: 'add'
    } |
    {
        type: 'remove'
        listId: string
        itemId: string
    }

export function ListReducers(state: ListType[], action: Action): ListType[] {
    switch (action.type) {
        case 'remove': {
            // debugger
            const listIndex = state.findIndex(list => list.id === action.listId)

            if (listIndex === -1) {
                console.error('cannot find desired list')
                return state
            }

            const clone=[...state]
            const cloneList = {...clone[listIndex]}
            const itemIndex = cloneList.items.findIndex(item => item.id === action.itemId)

            if (itemIndex === -1) {
                console.error('cannot find desired item')
                return state
            }

            // cloneList.items.splice(itemIndex , 1)
            cloneList.items = cloneList.items.filter(item => item.id !== action.itemId)
            clone[listIndex]=cloneList
            return clone
        }
        case 'add':{
            console.log()
            const newItem={id:globalThis.crypto.randomUUID(), description:globalThis.crypto.randomUUID()}
            const clone=[...state]
            const updateFirstList = {
                ...clone[0],
                items: [...clone[0].items, newItem]
            }
            clone[0] = updateFirstList
            return clone
        }
        default: {
            throw new Error("Unkown action")
        }
    }
}