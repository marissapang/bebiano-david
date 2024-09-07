import {BrowserRouter as Router} from 'react-router-dom';
import {useState, useEffect} from 'react';
import RoutesDef from './RoutesDef';
import { AppContext } from "./libs/contextLib";

import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [active, setActive] = useState("sculpture")

  return (
    <div className="App">
    <AppContext.Provider value = {{ 
          active, setActive
    }}>

    <Router>
      <RoutesDef/>
    </Router>
    </AppContext.Provider>
    </div>
  );
}

export default App;
