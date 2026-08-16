import { ItemType } from "../Type/item-type"
import { ListType } from "../Type/list-type"

export type ListAction =
    {
        type: 'add_item'
        boardIndex: number
        listIndex: number
        itemId: string
        title: string
    } |
    {
        type: 'remove'
        boardIndex: number
        listId: string
        itemId: string
    } |
    {
        type: 'remove_list'
        boardIndex: number
        listIndex: number
    } |
    {
        type: 'add_list'
        boardIndex: number
        listId: string
        title: string
    } |
    {
        type: 'move_item'
        boardIndex: number
        toListId: string
        fromListId: string
        itemId: string
        item: ItemType & { listId: string }
    }

export function ListReducers(state: ListType[][], action: ListAction): ListType[][] {
    switch (action.type) {
        case 'remove': {
            const { boardIndex, listId, itemId } = action

            console.log('state = ',state)
            console.log('boardIndex = ',boardIndex)
            console.log('state[boardIndex] = ',state[boardIndex])

            const listIndex = state[boardIndex].findIndex(list => list.id === listId)

            if (listIndex === -1) {
                console.error('cannot find desired list')
                return state
            }

            const clone = [...state[boardIndex]]
            const cloneList = { ...clone[listIndex] }
            cloneList.items = cloneList.items.filter(item => item.id !== itemId)
            clone[listIndex] = cloneList

            const updatState = [...state]
            updatState[boardIndex] = clone
            return updatState
        }
        case 'remove_list': {
            const { boardIndex, listIndex } = action
            const clone = [...state[boardIndex]]
            clone.splice(listIndex, 1)

            const updatState = [...state]
            updatState[boardIndex] = clone
            return updatState
        }
        case 'add_item': {
            const { boardIndex, listIndex, itemId, title } = action
            const newItem = { id: itemId, description: title }
            const clone = [...state[boardIndex]]
            const updateList = {
                ...clone[listIndex],
                items: [...clone[listIndex].items, newItem]
            }
            clone[listIndex] = updateList

            const updatState = [...state]
            updatState[boardIndex] = clone
            return updatState
        }
        case 'add_list': {
            const { boardIndex, listId, title } = action
            const newList = { id: listId, title: title, items: [] }
            const clone = [...state[boardIndex], newList]

            const updatState = [...state]
            updatState[boardIndex] = clone
            return updatState
        }
        case 'move_item': {
            const { boardIndex, toListId, fromListId, itemId, item } = action
            const toListIndex = state[boardIndex].findIndex(list => list.id === toListId)
            const fromListIndex = state[boardIndex].findIndex(list => list.id === fromListId)
            
            if (toListIndex === -1 || fromListIndex === -1) {
                console.error('cannot find list')
                return state
            }

            const newItem = item
            const clone = [...state[boardIndex]]
            clone[fromListIndex].items = clone[fromListIndex].items.filter(item => item.id !== itemId)
            clone[toListIndex] = {
                ...clone[toListIndex],
                items: [...clone[toListIndex].items, newItem]
            }

            const updatState = [...state]
            updatState[boardIndex] = clone
            return updatState
        }
        default: {
            throw new Error("Unknown action")
        }
    }
}