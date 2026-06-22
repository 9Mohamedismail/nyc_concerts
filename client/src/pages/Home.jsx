import React from "react";
import StadiumGrid from "../components/StadiumGrid";

const Home = () => {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p>Venues</p>
        <h2>Choose a stadium</h2>
        <span>Select a stadium to view upcoming and past concerts.</span>
      </div>

      <StadiumGrid />
    </section>
  );
};

export default Home;
