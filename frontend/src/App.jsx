import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Certifications from './pages/Certifications';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import EnrollPage from './pages/EnrollPage';
import CourseDetails from './pages/CourseDetails';
import CoursePlayer from './pages/CoursePlayer';
import Hackathons from './pages/Hackathons'
import HackathonDetail from './pages/HackathonDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
        <Route path="enroll/:courseId" element={<EnrollPage />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/learn/:courseId/week/:weekNumber" element={<CoursePlayer />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenges/:challengeId" element={<Challenges />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="hackathons" element={<Hackathons />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/hackathons/:id" element={<HackathonDetail />} />
      </Route>
    </Routes>
  );
}

export default App;