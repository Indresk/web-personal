import { Routes, Route, Navigate } from 'react-router';

import Index from './views/Index';
import About from './views/About';
import Experience from './views/Exprience';
import ContactMe from './views/ContactMe';
import Projects from './views/Projects';
import ProjectDetails from './views/ProjectDetails';

export default function Router() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/projects' element={<Projects />} />
			<Route path='/projects/:pid' element={<ProjectDetails />} />
			<Route path='/experience' element={<Experience />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact-me' element={<ContactMe />} />
			<Route path='/*' element={<Navigate to='/' replace />} />
		</Routes>
	);
}
