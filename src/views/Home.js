// Hook imports
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Style imports 
import './Home.scss';

// Image imports
import banner from '../images/banner.jpg';


export default function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Home">
        <img src={banner}/>
        <div className="Text-Area">
          <div className="TitleAndButton">
            <h1>BEBIANO DAV&Iacute;D</h1>
            <button onClick={()=>navigate('/sculpture')}>ENTER</button>
          </div>
        </div>
    </div>
  );
}

