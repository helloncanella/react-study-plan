import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import SeeGrades from './components/seegrades';
import AddGrades from './components/addgrades';
import StudyPlan from './components/studyplan';

class App extends Component {
  render() {
    return (
    	<div>
      		<Header />
      		<AddGrades />
      	</div>
    );
  }
}

export default App;

// Adicionar depois o See Grades e o StudyPlan, depois de ter adicionado a lógica de ao clicar no Header eu mostro a página correta
