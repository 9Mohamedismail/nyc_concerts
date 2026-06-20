import React from "react";
import StadiumGrid from "../components/StadiumGrid";

const Home = () => {
  return (
    <section>
      <h2>NYC Concerts</h2>
      <p>Select a stadium to view upcoming and past concerts.</p>

      <StadiumGrid />
    </section>
  );
};

export default Home;
