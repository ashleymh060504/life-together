import React from "react";
import "./loginPage.css";
import Welcome from "./Welcome";
import LoginRegister from "./LoginRegister";
import ContactUs from "./ContactUs";

function LoginPage() {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Feature A */}
        <div className="col-12 mb-5">
          <Welcome />
        </div>

        {/* Feature B */}
        <div className="col-12 mx-auto">
          <LoginRegister />
        </div>
        {/* Feature C */}
        <div className="col-12 mt-5">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
