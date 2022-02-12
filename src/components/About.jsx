import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <main className="main">
        <section className="card">
          <h2 className="heading">About</h2>
          <article className="cards">
            <h3>Travel</h3>
            <img src="./images/travel.jpg" alt="" />
            <div>
              <p>
                I am a life-long traveller. Whenever I get a chance I travel to
                a different destination. I believe travel gives me a different
                perspective to understand different cultures and people. I get
                inspiration from nature and that is the reason, I like traveling
                to mountains and valleys. I like hiking and treking in the hilly
                areas. Going to national parks makes me realize how vast this
                planet and universe is and keeps me grounded through an amazing
                and humbling experience. So far I have traveled to Europe, UK,
                Canada, Dubai, Sub-continent, Turkey and several states in the
                USA.
              </p>
            </div>
          </article>
          <article className="cards">
            <h3>Music</h3>
            <img src="./images/music.jpg" alt="" />
            <p>
              I am not a singer but love to listen music and can play my
              favorite songs on piano. I like a variety of music including rock,
              pop, country and indian classic.
            </p>
          </article>
          <article className="cards">
            <h3>Experience</h3>
            <img src="./images/experience.jpg" alt="" />
            <p>
              Currently, I am working as an Instructional Associate at Fullstack
              Academy NY for their university web development program.
            </p>

            <p>
              <strong>Experience outside USA</strong>
            </p>
            <p>
              I worked as an assistant professor before moving to the United
              States.
            </p>
          </article>
          <article className="cards">
            <h3>Education</h3>
            <img src="./images/education.jpg" alt="" />
            <p>Software Engineering Immersive, Fullstack Academy, NY</p>

            <p>Doctor of Education, Dowling College, Long Island, NY</p>
          </article>
        </section>
      </main>
    </>
  );
};

export default About;
