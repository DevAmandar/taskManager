import { ListType } from "./list-type";

export type BoardType = {
    taskId: string;
    taskTitle: string;
    lists: ListType[]
}