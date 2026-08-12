import React, { Children, PropsWithChildren, useReducer } from 'react'
import type { ReactNode } from 'react'
import { BoardContext } from '../context/BoardContext'
import type { ListType } from '../Type/list-type'
import { listData } from '../Data/listData'
import { ListReducers } from '../Reducers/ListReducers'
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

