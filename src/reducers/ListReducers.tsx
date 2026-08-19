// reducers/ListReducers.tsx
import { ItemType } from "../Type/item-type"
import { ListType } from "../Type/list-type"
import { BoardType } from "../Type/board-type"

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
    } |
    {
        type: 'add_task'
        taskTitle: string
        taskId: string
        description: string
    } |
    {
        type: 'remove_task'
        taskId: string
    } |
    {
        type: 'rename_board'
        boardIndex: number
        title: string
    } |
    {
        type: 'rename_list_title'
        boardIndex: number
        listIndex: number
        title: string
    } |
    {
        type: 'change_task'
        boardIndex: number
        title: string
        description: string
        
    }


export function ListReducers(state: BoardType[], action: ListAction): BoardType[] {
    switch (action.type) {
        case 'remove': {
            const { boardIndex, listId, itemId } = action

            const board = state[boardIndex]
            if (!board) {
                console.error('Board not found')
                return state
            }

            const listIndex = board.lists.findIndex(list => list.id === listId)

            if (listIndex === -1) {
                console.error('cannot find desired list')
                return state
            }


            const updatedLists = [...board.lists]
            const updatedList = {
                ...updatedLists[listIndex],
                items: updatedLists[listIndex].items.filter(item => item.id !== itemId)
            }
            updatedLists[listIndex] = updatedList


            const updatedState = [...state]
            updatedState[boardIndex] = {
                ...board,
                lists: updatedLists
            }
            return updatedState
        }

        case 'remove_list': {
            const { boardIndex, listIndex } = action

            const board = state[boardIndex]
            if (!board) return state

            const updatedLists = [...board.lists]
            updatedLists.splice(listIndex, 1)

            const updatedState = [...state]
            updatedState[boardIndex] = {
                ...board,
                lists: updatedLists
            }
            return updatedState
        }

        case 'add_item': {
            const { boardIndex, listIndex, itemId, title } = action

            const board = state[boardIndex]
            if (!board) return state

            const newItem = { id: itemId, description: title }
            const updatedLists = [...board.lists]
            updatedLists[listIndex] = {
                ...updatedLists[listIndex],
                items: [...updatedLists[listIndex].items, newItem]
            }

            const updatedState = [...state]
            updatedState[boardIndex] = {
                ...board,
                lists: updatedLists
            }
            return updatedState
        }

        case 'add_list': {
            const { boardIndex, listId, title } = action

            const board = state[boardIndex]
            if (!board) return state

            const newList = { id: listId, title: title, items: [] }
            const updatedLists = [...board.lists, newList]

            const updatedState = [...state]
            updatedState[boardIndex] = {
                ...board,
                lists: updatedLists
            }
            return updatedState
        }

        case 'move_item': {
            const { boardIndex, toListId, fromListId, itemId, item } = action

            const board = state[boardIndex]
            if (!board) return state

            const toListIndex = board.lists.findIndex(list => list.id === toListId)
            const fromListIndex = board.lists.findIndex(list => list.id === fromListId)

            if (toListIndex === -1 || fromListIndex === -1) {
                console.error('cannot find list')
                return state
            }

            const updatedLists = [...board.lists]


            updatedLists[fromListIndex] = {
                ...updatedLists[fromListIndex],
                items: updatedLists[fromListIndex].items.filter(
                    listItem => listItem.id !== itemId
                )
            }

            updatedLists[toListIndex] = {
                ...updatedLists[toListIndex],
                items: [...updatedLists[toListIndex].items, item]
            }

            const updatedState = [...state]
            updatedState[boardIndex] = {
                ...board,
                lists: updatedLists
            }
            return updatedState
        }
        case 'add_task': {
            const { taskId, taskTitle, description } = action

            const cloneState = [...state]

            const newTask = {
                taskId: taskId,
                taskTitle: taskTitle,
                description: description,
                lists: []
            } as BoardType

            cloneState.push(newTask)
            return cloneState
        }
        case 'remove_task': {
            // debugger
            const { taskId } = action
            const clone = [...state]
            const updateState = clone.filter(board => board.taskId !== taskId)
            return updateState
        }
        case "rename_board": {

            const { title, boardIndex } = action

            const board = state[boardIndex]

            const updateState = [...state]

            updateState[boardIndex] = {
                ...board,
                taskTitle: title
            }

            return updateState
        }
        case 'rename_list_title': {
            const { boardIndex, listIndex, title} = action

            const updateState=[...state]

            const board=updateState[boardIndex]
            if(!board) return state

            const updateList=[...board.lists]
            updateList[listIndex]={
                ...updateList[listIndex],
                title: title
            }

            updateState[boardIndex]= {
                ...board,
                lists: updateList
            }

            return updateState
        }
        case "change_task": {
            const {boardIndex, title, description} = action

            const board=state[boardIndex]

            const updateState=[...state]
            
            updateState[boardIndex]={
                ...board,
                taskTitle: title,
                description: description
            }

            return updateState
        }

        default: {
            throw new Error("Unknown action")
        }
    }
}