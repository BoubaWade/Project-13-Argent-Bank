import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/profile/Profile";
import Error from "./components/pages/error/Error";
import ProtectedRoute from "./components/ProtectedRoute";

import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route Component={ProtectedRoute}>
            <Route path="/profile" Component={Profile} />
          </Route>
          <Route path="*" Component={Error} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
