import "./App.css";
import Initial from "./components/initial/initial.component";
import Login from "./components/login/login.component";
import SignUp from "./components/signup/signup.component";
import Profile from "./components/profile/profile.component";
import Todos from "./components/todos/todos.component";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

const apiUrl = "http://localhost:5000";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem("token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  return (
    <Router>
      <div className="parent">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink activeClassName="selected" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/signup">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/profile">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="selected" to="/todos">
                  Todos
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/login">
            <main>
              <Login />
            </main>
          </Route>
          <Route path="/signup">
            <main>
              <SignUp />
            </main>
          </Route>
          <Route path="/profile">
            <main>
              <Profile />
            </main>
          </Route>
          <Route path="/todos">
            <main>
              <Todos />
            </main>
          </Route>
          <Route path="/">
            <main>
              <Initial />
            </main>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
