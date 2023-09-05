import {RouterProvider} from "react-router-dom";
import router from "../presentation/routes";

export default function Main() {
    return (
<>
    <RouterProvider router={router}/>
</>
    )
}