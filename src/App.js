import './App.css';
import React, { Component} from "react";
import Login from './components/login';
import Signup from './components/signup';
import Hello from './components/Hello';
import TeacherHome from './components/teacher-home';
import AddLesson from './components/add-lesson';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="site">
      <main  className='h-100'>
          <Routes>
              <Route exact path={"/login"} element={<Login />}/>
              <Route exact path={"/signup"} element={<Signup />}/>
              <Route exact path={"/hello"} element={<Hello />}/>
              <Route exact path={'/home'} element={<TeacherHome />}/>
              <Route exact path={'/addlesson'} element={<AddLesson />}/>
              {/* <Route path={"/"} render={() => <div>Home again</div>}/> */}
          </Routes>
      </main>
    </div>
  );
}

export default App;
