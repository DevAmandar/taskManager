import { ReactNode } from "react";
import Task from "../Component/Task/Task";

export default function TasksPage(): ReactNode{

    const target=[1,2,3]
    return(
        <div className="mt-20 ml-3.5 flex items-center  gap-2.5 flex-wrap">
            {target.map(target => (
                <Task id={target}/>
            ))}
        </div>
    )
}