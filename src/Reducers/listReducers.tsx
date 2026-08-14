import Item from "../Component/Item/Item"
import { ListType } from "../Type/list-type"

export type ListAction =
    {
        type: 'add_item'
        listIndex: number
        itemId: string
        title: string
    } |
    {
        type: 'remove'
        listId: string
        itemId: string
    } |
    {
        type: 'add_list'
        listId: string
        title: string
    }

export function ListReducers(state: ListType[], action: ListAction): ListType[] {
    switch (action.type) {
        case 'remove': {
            // debugger
            const listIndex = state.findIndex(list => list.id === action.listId)

            if (listIndex === -1) {
                console.error('cannot find desired list')
                return state
            }

            const clone = [...state]
            const cloneList = { ...clone[listIndex] }
            const itemIndex = cloneList.items.findIndex(item => item.id === action.itemId)

            if (itemIndex === -1) {
                console.error('cannot find desired item')
                return state
            }

            // cloneList.items.splice(itemIndex , 1)
            cloneList.items = cloneList.items.filter(item => item.id !== action.itemId)
            clone[listIndex] = cloneList
            return clone
        }
        case 'add_item': {
            
            const newItem = { id: action.itemId, description: action.title}
            const clone = [...state]
            const updateList = {
                ...clone[action.listIndex],
                items: [...clone[action.listIndex].items, newItem]
            }
            clone[action.listIndex] = updateList
            return clone
        }
        case 'add_list':{

            const newList={id:action.listId, title:action.title, items:[]}
            const clone=[...state, newList]
            return clone
        }
        default: {
            throw new Error("Unkown action")
        }
    }
}