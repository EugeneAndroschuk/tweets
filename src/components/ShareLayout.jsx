import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import { AppBar, Toolbar } from "@mui/material";
import { Suspense } from "react";
import Loader from "./Loader/Loader";

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
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
                
            </main>
        </>
    );
}

export default ShareLayout;