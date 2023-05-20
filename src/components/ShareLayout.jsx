import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { AppBar, Toolbar } from "@mui/material";

const ShareLayout = () => {

    return (
        <>
            <header>
                <AppBar sx={{ position: 'static' }}>
                    <Toolbar>
                        <Navigation />
                    </Toolbar>
                </AppBar>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default ShareLayout;