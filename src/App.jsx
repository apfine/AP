import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Survey from './components/SurveyForm.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
  );
}

export default App;
