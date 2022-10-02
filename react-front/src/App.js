// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudentView from './components/views/StudentView';
import LibrarianView from './components/views/LibrarianView';
import CreateUser from './components/CreateUser';
import CreateBook from './components/CreateBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
      <Routes>
        <Route path='/' element={ <StudentView /> } />
        <Route path='/librarian' element={ <LibrarianView /> } />
        <Route path='/new-user' element={ <CreateUser /> } />
        <Route path='/new-book' element={ <CreateBook /> } />
      </Routes>  
      </BrowserRouter> 
    </div>
  );
}

export default App;
