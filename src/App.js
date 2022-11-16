import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartTestPage from './Pages/startTestPage';
import TestOne from './Pages/testOne';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route index element={<StartTestPage />} />
          <Route path='/testOne' element={< TestOne />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
