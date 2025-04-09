import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Survey from './components/SurveyForm.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
  );
}

export default App;
