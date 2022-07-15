import React, { useState } from "react";
import "./style/LoginForm.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div className="frm">
      <div className="frm1">
        <form onSubmit={submitHandler}>
          <div className="form-inner">
            <h2>Login</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}
            <div className="form-group">

            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input
                className="inpt"
                type="email"
                name="email"
                placeholder="admin@admin.com"
                id="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                className="inpt"
                type="password"
                name="password"
                placeholder="admin123"
                id="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <input className="login" type="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
