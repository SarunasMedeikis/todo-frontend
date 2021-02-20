import React from "react";
import axios from "axios";
import "./signup.css";

function SignUp(params) {
  const initialState = { username: "", email: "", password: "" };
  const [registerData, setRegisterData] = React.useState(initialState);

  function onSubmit(event) {
    event.preventDefault();
  }
  function onChange(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Create a new account</h1>
        <label>
          Username:
          <input
            type="text"
            value={registerData.username}
            name="username"
            onChange={onChange}
            placeholder="Desired username"
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={registerData.email}
            name="email"
            onChange={onChange}
            placeholder="Desired email"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={registerData.password}
            name="password"
            onChange={onChange}
            placeholder="Desired password"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
