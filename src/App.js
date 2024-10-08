import './App.css';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './components/pages/Landingpage';
import Homepage from './components/pages/Homepage';
import MainHome from './components/main/MainHome';
import RatingTasks from './components/main/RatingTasks';
import CandidateConsensus from './components/main/CandidateConsensus';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Landingpage/>}>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route path='/main' element={<Homepage/>}>
          <Route path='/main' element={<MainHome/>}/>
          <Route path='/main/rating_tasks' element={<RatingTasks/>}/>
          <Route path='/main/candidate_consensus' element={<CandidateConsensus/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
