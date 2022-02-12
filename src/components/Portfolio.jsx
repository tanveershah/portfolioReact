import React from 'react';

import './Portfolio.css';

const Portfolio = () => {
  return (
    <main className="main">
      <section className="card">
        <h2 className="heading">Portfolio</h2>
        <article className="cards">
          <h3>Vinto App</h3>
          <img src="./images/vinto.jpg" alt="" />
          <div>
            <p>
              Vinto is a video conferencing solution that emphasizes realtime
              non-verbal interactions between participants. Vinto allows
              participants to join a room, have a video conference, and
              communicate non-verbally through hand raises, and - in the future
              - through even more forms of expression, e.g. claps, queueing up
              to ask a question, emojis, etc.
            </p>
            <p>
              Under the hood, Vinto uses lib-jitsi-meet, an API that wraps
              around WebRTC technology and is designed to set up video
              conferences on a server running jitsi-meet (e.g. meet.jit.si).
              Vinto also implements a socket.io server to orchestrate real-time
              interactions like hand raises, etc.
            </p>
            <p>
              Finally, everything is rendered with React, front-end state is
              managed by Redux stores, and icons/components are from the
              beautiful material-ui and styled-icons libraries. Where necessary,
              Vinto implements Promises to ensure that React can respond
              appropriately to lib-jitsi-meet events, e.g. rendering a
              conference only after it has been connected to and initialized
              correctly on the meeting server (i.e. meet.jit.si) by default.
            </p>
            <p>
              Built by Chikara Takahashi, Kevin Hu, and Tanveer Shah. Deployed
              version at <a href="https://vinto.app/">vinto.app.</a>
            </p>
          </div>
        </article>
        <article className="cards">
          <h3>Word Count Challenge</h3>
          <img src="./images/wordChallenge.jpg" alt="" />
          <p>
            This app performs following operations on a text: Character Count,
            Word Count, Sentence Count, Paragraph Count, and Word Frequency
            Analysis. Once application is running in browser, a user can enter
            any text in the text area, it will dynamically count characters,
            words, words frequency, sentences and paragraphs in the user entered
            or pasted text without refreshing the app (or browser). A text file
            can be added by clicking Choose Text File button. This link will
            take you to the
            <a href="https://github.com/tanveershah/wordCountChallenge">
              Project Repository
            </a>
          </p>
        </article>
        <article className="cards">
          <h3>E-Commerce Project</h3>
          <img src="./images/graceshoper.jpg" alt="" />
          <p>
            Grace Shopper is a Fullstack Academy project completed by a small
            group of four team members. It is an e-commerce website. A user can
            browse the products and buy them, registered users can see their
            order history, admin users can edit product information, etc. My
            group decided to sell Doritos, so we named our company D3-Doritos.
            You can see our project repository
            <a href="https://github.com/D3-Doritos/graceShopper">here.</a> The
            product information comes from randomly generated seed data, however
            you can “order” something and get a confirmation email. You can
            login with your Google account and leave a product review, and that
            review will be there as long as Heroku keeps our site running.
          </p>
        </article>
        <article className="cards">
          <h3>Personal Website</h3>
          <img src="./images/portfolio.jpg" alt="" />
          <p>
            I developed this personal website to showcase my portfolio and
            communicate with other professionals in the industry. It has home,
            porfolio and about pages. About page sheds a little light on me as a
            person and my interests outside the professional life. This project
            is developed using React, HTML, CSS. CSS variables and hsl used to
            keep color scheme as dynamic as possible so that it can be changed
            conveniently.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Portfolio;
