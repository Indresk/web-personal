import Router from './Router';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Spinner from './components/global/Spinner';
import { useEffect } from 'react';
import { useRouteTransition } from './providers/TransitionProvider';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {
	const { starterTransition } = useRouteTransition();
	useScrollToTop();

	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker.register('/sw.js');
		});
	}

	useEffect(() => {
		starterTransition();
	}, []);

	return (
		<>
			<div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
				<Header />
				<main>
					<Router />
				</main>
				<Footer />
			</div>
			<Spinner />
		</>
	);
}

export default App;
