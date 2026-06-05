import { Routes, Route, Navigate } from 'react-router';

import Index from './views/Index';
import About from './views/About';

export default function Router() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/projects' element={<About />} />
			<Route path='/experience' element={<About />} />
			<Route path='/about' element={<About />} />
			<Route path='/contact-me' element={<About />} />
			<Route path='/*' element={<Navigate to='/' replace />} />
		</Routes>
	);
}
