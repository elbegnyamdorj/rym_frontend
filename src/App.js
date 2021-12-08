import './App.css';
import React, { Component} from "react";
import Login from './components/login';
import Signup from './components/signup';
import Hello from './components/Hello';
import TeacherHome from './components/teacher-home';
// import { Routes, Route, Link, Router } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="site">
      <main>
          <Routes>
              <Route exact path={"/login"} element={<Login />}/>
              <Route exact path={"/signup"} element={<Signup />}/>
              <Route exact path={"/hello"} element={<Hello />}/>
              <Route exact path={'/home'} element={<TeacherHome />}/>
              {/* <Route path={"/"} render={() => <div>Home again</div>}/> */}
          </Routes>
      </main>
    </div>
  );
}

export default App;
