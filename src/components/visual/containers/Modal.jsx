import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

export function Modal({
	isOpen,
	onClose,
	title,
	children,
	footer,
	closeOnOverlayClick = true,
	size = 'md',
}) {
	const titleId = useId();
	const dialogRef = useRef(null);
	const lastActiveElement = useRef(null);

	const sizeClasses = {
		sm: 'max-w-md',
		md: 'max-w-2xl',
		lg: 'max-w-4xl',
		xl: 'max-w-6xl',
	};

	useEffect(() => {
		if (!isOpen) return;

		lastActiveElement.current = document.activeElement;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		const focusableSelectors = [
			'button:not([disabled])',
			'[href]',
			'input:not([disabled])',
			'select:not([disabled])',
			'textarea:not([disabled])',
			"[tabindex]:not([tabindex='-1'])",
		].join(',');

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				onClose();
				return;
			}

			if (event.key === 'Tab' && dialogRef.current) {
				const focusableElements =
					dialogRef.current.querySelectorAll(focusableSelectors);
				if (!focusableElements.length) return;

				const first = focusableElements[0];
				const last = focusableElements[focusableElements.length - 1];

				if (event.shiftKey && document.activeElement === first) {
					event.preventDefault();
					last.focus();
				} else if (!event.shiftKey && document.activeElement === last) {
					event.preventDefault();
					first.focus();
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		requestAnimationFrame(() => {
			const autofocusTarget =
				dialogRef.current?.querySelector('[data-autofocus]') ||
				dialogRef.current?.querySelector(focusableSelectors);

			autofocusTarget?.focus();
		});

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener('keydown', handleKeyDown);
			lastActiveElement.current?.focus?.();
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<div
			className='fixed inset-0 z-50 flex items-end justify-center bg-secondary/30 p-4 sm:items-center'
			onMouseDown={(e) => {
				if (closeOnOverlayClick && e.target === e.currentTarget) {
					onClose();
				}
			}}
			aria-hidden='true'>
			<div
				ref={dialogRef}
				role='dialog'
				aria-modal='true'
				aria-labelledby={titleId}
				className={[
					'w-full',
					sizeClasses[size] || sizeClasses.md,
					'max-h-[90vh] overflow-y-auto',
					'bg-secondary text-white shadow-2xl',
					'ring-1 ring-black/10',
					,
				].join(' ')}>
				<div className='flex items-center justify-between gap-4 border-b border-lightgray px-5 py-4 '>
					<h2
						id={titleId}
						className='text-lg font-semibold sm:text-xl uppercase'>
						{title}
					</h2>

					<button
						type='button'
						onClick={onClose}
						aria-label='Close modal'
						className='inline-flex h-10 w-10 items-center justify-center text-lightgay transition hover:bg-darkgray hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary '>
						<span className='text-2xl leading-none'>&times;</span>
					</button>
				</div>

				<div className='px-5 py-5'>{children}</div>

				{footer ? (
					<div className='flex flex-col-reverse gap-3 border-t border-lightgray px-5 py-4 sm:flex-row sm:justify-end'>
						{footer}
					</div>
				) : null}
			</div>
		</div>,
		document.body,
	);
}
