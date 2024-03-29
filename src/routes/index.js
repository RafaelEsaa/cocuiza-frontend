import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";

const RouterApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    );
};

export default RouterApp;
