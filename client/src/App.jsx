import React from "react";
import { useRoutes, Link } from "react-router-dom";
import Home from "./pages/Home";
import StadiumEvents from "./pages/StadiumEvents";
import "./App.css";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stadium/:stadium",
      element: <StadiumEvents />,
    },
  ]);

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <strong>NYC Concerts</strong>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/" className="contrast">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <main>{element}</main>
    </div>
  );
};

export default App;
