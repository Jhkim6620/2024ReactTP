import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Quizzes from './pages/quizzes';
import Quiz from './pages/quiz';
import Results from './pages/results';
import Contact from './pages/contact';
import styled from 'styled-components';
import Home from './components/home';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />

        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
