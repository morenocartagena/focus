// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudentView from './components/views/StudentView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Routes>
        <Route path='/' element={ <StudentView /> } />
      </Routes>  
      </BrowserRouter> 
    </div>
  );
}

export default App;
