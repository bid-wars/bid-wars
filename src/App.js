import React from 'react';
import Home from './Components/Home'
import {HashRouter} from 'react-router-dom'
import routes from './routes'


function App() {

  return (
    <HashRouter >
      {routes}
    </HashRouter>
  );
}

export default App;
