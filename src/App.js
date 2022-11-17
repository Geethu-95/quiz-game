import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartTestPage from './Pages/startTestPage';
import TestOne from './Pages/testOne';
import TestTwo from './Pages/testTwo'
import TestThree from './Pages/testThree';
import TestFour from './Pages/TestFour';
import TestFive from './Pages/TestFive';
import ResultPage from './Pages/resultPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route index element={<StartTestPage />} />
          <Route path='/testOne' element={< TestOne />} />
          <Route path='/testTwo' element={< TestTwo />} />
          <Route path='/testThree' element={< TestThree />} />
          <Route path='/testFour' element={< TestFour />} />
          <Route path='/testFive' element={< TestFive />} />
          <Route path='/results' element={< ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
