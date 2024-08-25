import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/pages/Landingpage';
import Homepage from './components/pages/Homepage';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Landingpage/>}>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route path='/main' element={<Homepage/>}>

        </Route>

      </Routes>
    </>
  );
}

export default App;
