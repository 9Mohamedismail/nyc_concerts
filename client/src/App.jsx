import React from "react";
import { useRoutes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import StadiumEvents from "./pages/StadiumEvents";
import "./App.css";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/events/:slug",
      element: <EventDetail />,
    },
    {
      path: "/stadium/:stadium",
      element: <StadiumEvents />,
    },
  ]);

  return (
    <div className="app">
      <header className="app-hero">
        <nav className="app-nav" aria-label="Primary navigation">
          <Link to="/" className="brand-link">
            NYC Concerts
          </Link>

          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </div>
        </nav>

        <div className="app-hero-content">
          <h1>NYC Concerts</h1>
          <div className="hero-actions">
            <Link to="/" role="button">
              Browse Stadiums
            </Link>
            <Link to="/events" role="button" className="secondary">
              All Events
            </Link>
          </div>
        </div>
      </header>

      <main className="app-main">{element}</main>
    </div>
  );
};

export default App;
