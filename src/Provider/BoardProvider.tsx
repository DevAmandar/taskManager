import React, { Children, PropsWithChildren, useEffect, useReducer } from 'react'
import type { ReactNode } from 'react'
import { BoardContext } from '../context/BoardContext'
import type { ListType } from '../Type/list-type'
import { listData } from '../data/listData'
import { ListReducers } from '../reducers/ListReducers'
type Props = PropsWithChildren

export default function BoardProvider({children} : Props) : ReactNode {

    const intialData = (): ListType[] => {
        const stored = localStorage.getItem('boardData')
        if(stored){
            try{
                return JSON.parse(stored) as ListType[]
            } catch {
                return listData
            }
        }
        return listData
    }

    const [lists , dispatchLists] = useReducer(ListReducers, intialData())

    useEffect(() => {
        localStorage.setItem('boardData', JSON.stringify(lists))
    },[lists])

    return(
        <BoardContext value={{lists,dispatchLists}}>
            {children}
        </BoardContext>
    )
}

