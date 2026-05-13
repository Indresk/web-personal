import { createContext, useCallback, useContext, useMemo, useRef } from 'react';
import { LoadOverlay } from '../components/global/LoadOverlay';
import { useNavigate } from 'react-router';

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
	const navigate = useNavigate();
	const overlayRef = useRef(null);
	const isTransitioningRef = useRef(false);

	const navigateWithTransition = useCallback(
		async (to, options = {}) => {
			if (isTransitioningRef.current) return;

			isTransitioningRef.current = true;

			try {
				await overlayRef.current?.play({
					message: options.message,
					holdDuration: options.holdDuration,
					startAtMiddle: options.startAtMiddle,
					onMiddle: () => navigate(to, options.navigateOptions),
				});
			} finally {
				isTransitioningRef.current = false;
			}
		},
		[navigate],
	);

	const starterTransition = useCallback(
		async (to, options = {}) => {
			if (isTransitioningRef.current) return;

			isTransitioningRef.current = true;

			try {
				await overlayRef.current?.play({
					message: 'Welcome',
					holdDuration: options.holdDuration,
					startAtMiddle: true,
				});
			} finally {
				isTransitioningRef.current = false;
			}
		},
		[navigate],
	);

	const value = useMemo(
		() => ({
			starterTransition,
			navigateWithTransition,
			isTransitioning: () => isTransitioningRef.current,
		}),
		[navigateWithTransition],
	);

	return (
		<TransitionContext.Provider value={value}>
			{children}
			<LoadOverlay ref={overlayRef} />
		</TransitionContext.Provider>
	);
}

export function useRouteTransition() {
	const context = useContext(TransitionContext);

	if (!context) {
		throw new Error(
			'useRouteTransition must be used within TransitionProvider',
		);
	}

	return context;
}
