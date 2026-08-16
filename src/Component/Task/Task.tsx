import { ReactNode } from "react";
import { NavLink, Link } from "react-router";

type Props = {
    id: number
}
export default function Task({id}: Props): ReactNode {

    return (
        <div className="border-2 w-[335px]">
            <div className="border-b-2">
                <Link to={`boardPage/${id}`}>
                    <h2 className="p-2.5">title task</h2>
                </Link>
            </div>
            <p className="p-2.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, iure!</p>
        </div>
    )
}