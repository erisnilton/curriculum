import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "../pages/account";
import Login from "../pages/login";
import { Main } from "../pages/main";
import NotFound from "../pages/not-found";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
