import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav style={{ display: "flex", gap: "10px" }}>
                <Link to="/">Home</Link>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}