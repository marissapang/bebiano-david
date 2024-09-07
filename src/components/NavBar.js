// Hook imports
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../libs/contextLib";

// Style imports 
import './NavBar.scss';

// Image imports
import banner from '../images/banner.jpg';



export default function Home(props) {
  const navigate = useNavigate();
  const { active, setActive } = useAppContext();


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div className={props.size}>
    <div className="NavBar">
      <span 
        className={active==='sculpture'?"NavItem Active":"NavItem"}
        onClick={()=>{navigate('/sculpture');setActive('sculpture')}}
      >
        SCULPTURE
      </span>
      <span 
        className={active==='process'?"NavItem Active":"NavItem"}
        onClick={()=>{navigate('/process');setActive('process')}}
      >
        PROCESS
      </span>
      <span 
        className={active==='contact'?"NavItem Active":"NavItem"}
        onClick={()=>{navigate('/contact');setActive('contact')}}
      >
        CONTACT
      </span>
    </div>
    </div>
  );
}

