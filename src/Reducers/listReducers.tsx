import { ListType } from "../Type/listType"

type Action=
{
    type:'add'
} |
{
    type:'remove'
    listId:string
    itemId:string
}

export function ListReducers(state : ListType[], action : Action): ListType[] {
    return []
}