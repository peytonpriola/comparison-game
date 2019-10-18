import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import ChoiceComponent from './components/choice-component'

import './App.css';
import NameComponent from './components/name-component'

const pageOne = () => {
  return (
    <div>
    <NameComponent/>
    </div>
  )
}

const pageTwo = () => {
  return (
    <div>
    <ChoiceComponent/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Route path='/' exact component={pageOne}/>
      <Route path='/Player1' exact component={pageTwo}/>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
