import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasic from './components/StateBasic';
import Counter from './components/Counter';
import Use from './components/Use';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
      <h1>Afna</h1>
      {/*<Login/>*/}
      {/*<Signup/>*/}
      <Navbar/>
      <Routes>
      <Route path='/reg' element={<Register/>}/>
      <Route path='/u' element={<StateBasic/>}/>
      <Route path='/c' element={<Counter/>}/>
      <Route path='f' element={<Use/>}/>
      <Route path='v' element={<Viewdata/>}/>
      </Routes>
      
      </div>
  );
}

export default App;
