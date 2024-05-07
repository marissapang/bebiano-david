// Hook imports
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Style imports 
import './Home.scss';

// Image imports
import banner from '../images/banner.png';
import bannerMobile from '../images/banner-mobile.png';



export default function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={props.size}>
    <div className="Home">
      Sculpture page
    </div>
    </div>
  );
}

