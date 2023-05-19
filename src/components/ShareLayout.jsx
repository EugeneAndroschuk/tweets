import { NavLink, Outlet } from "react-router-dom";

const ShareLayout = () => {

    return (
        <>
        <header>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/tweets">Tweets</NavLink>
                </li>
            </ul>
        </header>
        <main>
            <Outlet/>
        </main>
        </> 
    );
}

export default ShareLayout;