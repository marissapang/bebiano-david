// Hook imports
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../libs/contextLib";


// Style imports 
import './Process.scss';

// Image imports
import banner from '../images/banner.jpg';

import NavBar from '../components/NavBar';
import Header from '../components/Header';


export default function Process(props) {
  const navigate = useNavigate();
  const { active } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log("active")
    console.log(active)
  }, [])

  return (
    <div className={props.size}>
    <div className="Home">
      <NavBar/>
      <Header/>
      Process page
    </div>
    </div>
  );
}

