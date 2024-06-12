import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <section className="main-banner">
        <h1>Welcome to Cognitive Therapy Quizzes</h1>
        <p>Enhance your cognitive skills with our fun and engaging quizzes designed for elderly users.</p>
        <Link to="/quizzes" className="button">Start a Quiz</Link>
      </section>
      <section className="features">
        <h2>Why Choose Us?</h2>
        <p>Our quizzes are scientifically designed to improve cognitive functions.</p>
        <p>Trusted by thousands of users.</p>
      </section>
    </main>
  );
}

export default Home;
