import React from "react";
import "../../styles/home.css";
import RegisterForm from "../component/Register-user.jsx";

export const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-custom py-5 gap-5">
      <RegisterForm />
    </div>
  );
};
