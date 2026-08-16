import { ReactNode } from "react";
import { Link } from "react-router";

export default function Test(): ReactNode {

    return(
        <div>
            <h1>hello world</h1>
            <Link to="/">بازگشت به صفحه اصلی</Link>
        </div>
    )
}