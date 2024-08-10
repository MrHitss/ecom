import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Navbar from "./Navbar";

const BackendLayout = () => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><Outlet /></main>
                </div>
            </div>
        </>  
    );
}
export default BackendLayout;