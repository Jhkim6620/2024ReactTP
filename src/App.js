import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import Quizzes from './pages/quizzes';
import A1_28 from './pages/A1_28';
import A2_36 from './pages/A2_36';
import Quiz2Main from './pages/quiz2'; 
import Quiz2Exam from './pages/quiz2exam'; 
import Quiz2Result from './pages/quiz2result'; 
import A3_53 from './pages/A3_53';
import styled from 'styled-components';


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
          <Route path="/A1_28/:id" element={<A1_28 />} />
          <Route path="/A2_36/:id" element={<A2_36 />} />
          <Route path="/quiz2" element={<Quiz2Main />} /> //문제2-1
          <Route path="/quiz2exam" element={<Quiz2Exam />} /> //문제2-2
          <Route path="/quiz2result" element={<Quiz2Result />} /> //문제2-3
          <Route path="/A3_53/:id" element={<A3_53 />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
