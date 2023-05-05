import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Home from './components/Home';
import Informationform from './components/Informationform';
import AddLecture from './components/AddLecture';
import SignUp from './components/Signup';
import LectureState from './context/LectureState';
function App() {
  return (
    <LectureState>
      <Router>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/informationform" element={<Informationform/>}/>
            <Route exact path="/addLect" element={<AddLecture/>}/>
        </Routes>
      </Router>
    </LectureState>
  );
}

export default App;
