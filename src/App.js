import {BrowserRouter as Router} from 'react-router-dom';
import {useEffect} from 'react';
import RoutesDef from './RoutesDef';
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">

    <Router>
      <RoutesDef/>
    </Router>
    </div>
  );
}

export default App;
