import React from "react";
import axios from "axios";
import "./login.css";

function Login(params) {
  const [jwt, setJwt] = React.useState(null);
  React.useEffect(() => {
    console.log(jwt);
    localStorage.setItem("token", jwt);
  }, [jwt]);

  const initialState = { email: "", password: "" };
  const [loginData, setLoginData] = React.useState(initialState);

  const getJwt = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/users/signin",
      loginData,
      {
        headers: { withCredentials: true, credentials: "include" },
      }
    );
    setJwt(data.token);
  };
  function onSubmit(event) {
    event.preventDefault();
    getJwt();
  }
  function onChange(event) {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            type="text"
            value={loginData.email}
            name="email"
            onChange={onChange}
            placeholder="Desired email"
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={loginData.password}
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

export default Login;
