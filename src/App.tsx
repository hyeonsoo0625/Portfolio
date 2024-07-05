import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';
import ExperienceKoPage from './pages/ExperienceKoPage';
import EducationKoPage from './pages/EducationKoPage';
import { useLanguageState } from "./shared/hooks/useLanguageState";
import ExperienceEnPage from './pages/ExperienceEnPage';
import EducationEnPage from './pages/EducationEnPage';
import OneKoPage from './pages/projects/OneKoPage';
import OneEnPage from './pages/projects/OneEnPage';
import TwoKoPage from './pages/projects/TwoKoPage';
import TwoEnPage from './pages/projects/TwoEnPage';
import ThreeKoPage from './pages/projects/ThreeKoPage';
import ThreeEnPage from './pages/projects/ThreeEnPage';

function App() {
  const languageType = useLanguageState(
    (state) => state.languageType
);
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/experience" element={languageType === "ko" ? <ExperienceKoPage /> : <ExperienceEnPage />} />
            <Route path="/education" element={languageType === "ko" ? <EducationKoPage /> : <EducationEnPage />} />
            <Route path="/project/1" element={languageType === "ko" ? <OneKoPage /> : <OneEnPage />} />
            <Route path="/project/2" element={languageType === "ko" ? <TwoKoPage /> : <TwoEnPage />} />
            <Route path="/project/3" element={languageType === "ko" ? <ThreeKoPage /> : <ThreeEnPage />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
