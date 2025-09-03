import React from "react";
import Review from "./Review";
import "./../styles/App.css";

function App() {
  return (
    <main>
      <section className="container">
        <h2 id="review-heading">Our Reviews</h2>
        <Review />
      </section>
    </main>
  );
}

export default App;
