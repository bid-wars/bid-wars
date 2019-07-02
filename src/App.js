import React from 'react';
import Register from './Components/Register'
import Login from './Components/LogInForm'
import DashBoard from './Components/DashBoard'
import {HashRouter} from 'react-router-dom'


function App() {

  return (
    <HashRouter >
      <DashBoard/>
    </HashRouter>
  );
}

export default App;
