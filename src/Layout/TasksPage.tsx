import { ReactNode } from "react";
import Task from "../Component/Task/Task";
import { listDatas } from "../data/listDatas";
export default function TasksPage(): ReactNode{

    const target=listDatas.length
    return(
        <div className="mt-20 ml-3.5 flex items-center  gap-2.5 flex-wrap">
            {listDatas.map((data, index) => (
                <Task key={data.taskId} id={index} title={data.taskTitle}/>
            ))}
        </div>
    )
}