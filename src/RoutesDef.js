import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Sculpture from './views/Sculpture';
import Process from './views/Process';
import Events from './views/Events';
import Contact from './views/Contact';


export default function RoutesDef(props){
	return (
		<Routes>
			<Route path='/' element={<Home size={props.size}/>}/>
			<Route path='/sculpture' element={<Sculpture size={props.size}/>}/>
			<Route path='/process' element={<Process size={props.size}/>}/>
			<Route path='/events' element={<Events size={props.size}/>}/>
			<Route path='/contact' element={<Contact size={props.size}/>}/>
		</Routes>
	)
}