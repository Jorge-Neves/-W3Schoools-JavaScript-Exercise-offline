import React, { FC } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';
import LessonPage from './components/Lesson';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/lessons" element={<LessonPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
