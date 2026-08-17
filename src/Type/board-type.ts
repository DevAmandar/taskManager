import { ListType } from "./list-type";

export type BoardType = {
    taskId: string;
    taskTitle: string;
    description: string
    lists: ListType[]
}