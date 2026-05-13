import { useEffect, useId, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useLenis } from 'lenis/react';

import Button from '../visual/buttons/Button';
import TextDecorationBar from '../visual/containers/TextDecorationBar';
import { LinkTo } from '../navigation/LinkTo';

const headerLinks = [
	{ displayedName: 'Home', link: '/' },
	{ displayedName: 'About', link: '/about' },
	{ displayedName: 'Experience', link: '/experience' },
	{ displayedName: 'Projects', link: '/projects' },
];

export default function Header() {
	const [isHeaderHidden, setIsHeaderHidden] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const panelRef = useRef(null);
	const closeTimerRef = useRef(null);
	const menuId = useId();
	const location = useLocation();

	useLenis((lenis) => {
		const current = lenis.actualScroll;
		const direction = lenis.direction;

		if (current <= 0) {
			setIsHeaderHidden(false);
			return;
		}

		setIsHeaderHidden((prev) => {
			if (direction === 1 && prev !== true) return true;
			if (direction === -1 && prev !== false) return false;
			return prev;
		});
	}, []);

	const openDropdown = () => {
		clearTimeout(closeTimerRef.current);
		setIsDropdownOpen(true);
	};

	const closeDropdown = () => {
		const panel = panelRef.current;

		if (!panel) {
			setIsDropdownOpen(false);
			return;
		}

		panel.style.maxHeight = `${panel.scrollHeight}px`;

		requestAnimationFrame(() => {
			panel.style.maxHeight = '0px';
		});

		closeTimerRef.current = setTimeout(() => {
			setIsDropdownOpen(false);
		}, 300);
	};

	const toggleDropdown = () => {
		if (isDropdownOpen) {
			closeDropdown();
		} else {
			openDropdown();
		}
	};

	useEffect(() => {
		if (isDropdownOpen) {
			closeDropdown();
		}
	}, [location.pathname]);

	useEffect(() => {
		if (!isDropdownOpen) return;

		const panel = panelRef.current;
		if (!panel) return;

		requestAnimationFrame(() => {
			panel.style.maxHeight = `${panel.scrollHeight}px`;
		});
	}, [isDropdownOpen]);

	useEffect(() => {
		return () => {
			clearTimeout(closeTimerRef.current);
		};
	}, []);

	return (
		<header
			className={[
				isDropdownOpen ? 'fixed' : 'sticky',
				'top-0 w-full max-w-screen z-50 flex flex-col lg:flex-row justify-between items-center px-6 md:px-10 py-6 bg-whitebg/70 backdrop-blur-md border-b-4 border-primary transition-transform duration-300 ease-in-out',
				isHeaderHidden && !isDropdownOpen
					? '-translate-y-full'
					: 'translate-y-0',
			].join(' ')}>
			<div className='text-2xl text-secondary uppercase flex justify-between items-center w-full lg:basis-[30%]'>
				<TextDecorationBar color='primary' className='basis-[90%]'>
					<p className='text-3xl'>Rafael Salcedo</p>
				</TextDecorationBar>

				<button
					type='button'
					onClick={toggleDropdown}
					aria-expanded={isDropdownOpen}
					aria-controls={menuId}
					aria-haspopup='true'
					aria-label={
						isDropdownOpen ? 'Close navigation menu' : 'Open navigation menu'
					}
					className='basis-[10%] flex justify-end lg:hidden cursor-pointer transition duration-300 ease-in-out'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className={
							isDropdownOpen
								? 'rotate-180 transition-transform duration-300 ease-in-out'
								: 'transition-transform duration-300 ease-in-out'
						}
						width='50'
						height='50'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						aria-hidden='true'>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M4 11l8 3l8 -3' />
					</svg>
				</button>
			</div>

			<div className='large-container hidden lg:flex gap-4'>
				<nav
					className='flex items-center gap-8'
					aria-label='Primary navigation'>
					{headerLinks.map((page) => (
						<LinkTo
							key={page.link}
							to={page.link}
							message={page.displayedName}
							useActiveState
							end
							activeClassName='text-[#6d5e00] border-b-2 border-[#6d5e00]'
							className='uppercase tracking-tighter text-secondary opacity-70 hover:opacity-100 hover:text-[#6d5e00] transition-all duration-300'>
							{page.displayedName}
						</LinkTo>
					))}
				</nav>

				<Button>Hire Me</Button>
			</div>

			{isDropdownOpen && (
				<div className='w-full lg:hidden'>
					<nav
						id={menuId}
						ref={panelRef}
						aria-label='Mobile navigation'
						className='w-full overflow-hidden transition-[max-height] duration-300 ease-in-out max-h-0'>
						<ul className='gap-1 flex flex-col p-4'>
							{headerLinks.map((page) => (
								<li key={page.link}>
									<LinkTo
										to={page.link}
										message={page.displayedName}
										useActiveState
										end
										activeClassName='text-[#6d5e00] border-b-2 border-[#6d5e00]'
										className='w-full inline-block uppercase tracking-tighter text-secondary opacity-70 hover:opacity-100 hover:text-[#6d5e00] transition-all duration-300'>
										{page.displayedName}
									</LinkTo>
								</li>
							))}
						</ul>

						<div className='px-4 pb-4'>
							<Button fullWidth>Hire Me</Button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
