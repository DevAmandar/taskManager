import React, { Children, PropsWithChildren, useReducer } from 'react'
import type { ReactNode } from 'react'
import { BoardContext } from '../context/BoardContext'
import type { ListType } from '../Type/list-type'
import { listData } from '../data/listData'
import { ListReducers } from '../reducers/ListReducers'
type Props = PropsWithChildren

export default function BoardProvider({children} : Props) : ReactNode {

    const [lists , dispatchLists] = useReducer(ListReducers, listData)
    return(
        <BoardContext value={{lists,dispatchLists}}>
            {children}
        </BoardContext>
    )
}

