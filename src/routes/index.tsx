import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutForm from "../components/about-form";
import EducationForm from "../components/education-form";
import ExperienceForm from "../components/experience-form";
import Login from "../pages/login";
import { Main } from "../pages/main";
import NotFound from "../pages/not-found";
import Register from "../pages/register";

const AppRoutes: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />}>
          <Route path="about" element={<AboutForm />} />
          <Route path="education" element={<EducationForm/>} />
          <Route path="experience" element={<ExperienceForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
