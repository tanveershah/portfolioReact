import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="main">
      <div className="para">
        <h2>A fullstack engineer, teacher and traveller!</h2>
        <br />
        <p>
          A skilled software engineer looking forward to work in a fast-paced
          organization to utilize technical skills and creative thinking. A
          professional who has a Growth mindset, believes in collaboration and
          is self-motivated.
        </p>
      </div>

      <h1 className="qoute">
        “Logic will get you from A to B. Imagination will take you everywhere.”
        –Albert Einstein
      </h1>

      <img className="home-image" src="./images/homeImage.jpg" alt="" />
    </main>
  );
};

export default Home;
