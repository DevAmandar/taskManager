import React, { Children, PropsWithChildren, useReducer } from 'react'
import type { ReactNode } from 'react'
import { BoardContext } from '../Context/BoardContext'
import type { ListType } from '../Type/listType'
import { listData } from '../Data/ListData'
import { ListReducers } from '../Reducers/listReducers'
type Props = PropsWithChildren

export default function BoardProvider({children} : Props) : ReactNode {

    const [lists , dispatch] = useReducer(ListReducers, listData)
    const add = () => {
        console.log(1)
        dispatch({type:'add'})
    }
    const remove= (listId:string, itemId:string) => {
        dispatch({type:'remove', listId:listId, itemId: itemId})
    }
    return(
        <BoardContext value={{lists,add,remove}}>
            {children}
        </BoardContext>
    )
}

