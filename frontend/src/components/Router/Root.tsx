import React from "react";
import { Outlet } from "react-router";
// import Header from "../Header/Header";

const Root = () => {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <Outlet />
        </React.Fragment>
    );
};

export default Root;
