import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { useLocation } from 'react-router';

export function useScrollToTop() {
	const { pathname } = useLocation();
	const lenis = useLenis();
	useEffect(() => {
		if (!lenis) return;

		lenis.scrollTo(0, {
			immediate: true,
		});
	}, [pathname, lenis]);
}
