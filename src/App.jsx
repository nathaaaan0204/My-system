import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { HomePage } from "./Pages/HomePage";
import { RegisterPage } from "./Pages/RegisterPage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
