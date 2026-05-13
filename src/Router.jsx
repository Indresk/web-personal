import { Routes, Route } from 'react-router';

import Index from './views/Index';
import Portfolio from './views/Portfolio';
import ErrorPage from './views/ErrorPage';
import About from './views/About';

export default function Router() {
	return (
		<Routes>
			<Route path='/' element={<Index />} />
			<Route path='/projects' element={<Portfolio />} />
			<Route path='/experience' element={<Portfolio />} />
			<Route path='/about' element={<About />} />
			<Route path='/portfolio' element={<Portfolio />} />
			<Route path='/*' element={<ErrorPage />} />
		</Routes>
	);
}
