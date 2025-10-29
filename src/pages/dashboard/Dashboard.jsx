import { Outlet } from "react-router-dom";

export default function DashboardPage(){
    return(
        <section>
            <h1>this is dashboard page</h1>
            <Outlet />
        </section>
    )
}