import { forwardRef, useMemo } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router';
import { useRouteTransition } from '../../providers/TransitionProvider';

export const LinkTo = forwardRef(function LinkTo(
	{
		to,
		children,
		onClick,
		className,
		style,
		message,
		holdDuration,
		startAtMiddle = false,
		navigateOptions,
		useActiveState = false,
		end = useActiveState ? true : false,
		activeClassName = '',
		inactiveClassName = '',
		activeStyle,
		inactiveStyle,
		childrenRender,
		disabled = false,
		...rest
	},
	ref,
) {
	const { navigateWithTransition, isTransitioning } = useRouteTransition();
	const resolvedPath = useResolvedPath(to);

	const resolveMessage = () => {
		if (message) return message;
		return to.replace('/', '');
	};

	const match = useMatch({
		path: resolvedPath.pathname,
		end,
	});

	const isActive = useActiveState ? Boolean(match) : false;

	const resolvedClassName = useMemo(() => {
		const base =
			typeof className === 'function'
				? className({ isActive })
				: className || '';

		if (!useActiveState) return base;

		return [base, isActive ? activeClassName : inactiveClassName]
			.filter(Boolean)
			.join(' ');
	}, [className, isActive, useActiveState, activeClassName, inactiveClassName]);

	const resolvedStyle = useMemo(() => {
		const base =
			typeof style === 'function' ? style({ isActive }) : style || undefined;

		if (!useActiveState) return base;

		return {
			...(base || {}),
			...(isActive ? activeStyle : inactiveStyle),
		};
	}, [style, isActive, useActiveState, activeStyle, inactiveStyle]);

	const content =
		typeof childrenRender === 'function'
			? childrenRender({ isActive })
			: typeof children === 'function'
				? children({ isActive })
				: children;

	const handleClick = async (event) => {
		onClick?.(event);

		if (
			event.defaultPrevented ||
			disabled ||
			isTransitioning() ||
			event.button !== 0 ||
			rest.target === '_blank' ||
			event.metaKey ||
			event.altKey ||
			event.ctrlKey ||
			event.shiftKey
		) {
			return;
		}

		event.preventDefault();

		const resolvedMessage = resolveMessage();

		await navigateWithTransition(to, {
			message: resolvedMessage,
			holdDuration,
			startAtMiddle,
			navigateOptions,
		});
	};

	return (
		<Link
			ref={ref}
			to={to}
			onClick={handleClick}
			className={resolvedClassName}
			style={resolvedStyle}
			aria-current={useActiveState && isActive ? 'page' : undefined}
			aria-disabled={disabled ? 'true' : undefined}
			{...rest}>
			{content}
		</Link>
	);
});
