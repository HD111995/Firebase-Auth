import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useLogout } from "./hooks/useLogout";
import { useAuthContext } from "./hooks/useAuthContext";

export default function App() {
  const { error, logout } = useLogout()
  const { user, appReady } = useAuthContext()
  return (

    <Router>
      {appReady && (
        <div>
          <nav>
            <Link to="/">
              <img src="/logo.jpeg" alt="" />
            </Link>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to="/signup">Signup</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
              {user && (
                <li onClick={logout}>
                  Logout
                </li>
              )}

            </ul>
          </nav>
          {error && <p>{error}</p>}
          <Switch>
            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/login">
              {!user && <Login />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
          </Switch>
        </div>
      )}
    </Router>

  );
}