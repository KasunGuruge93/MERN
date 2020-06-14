import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar'
import ExerciseList from './components/exersises-list'
import EditExercise from './components/edit-exercises'
import CreateExercise from './components/create-exercise'
import CreateUser from './components/create-user'

function App() {
  return (
    <Router>
      <div className =" container">
      <Navbar />
      <br />
      <Route path="/" component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />

      <Route path="/create" component={CreateExercise} />

      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
