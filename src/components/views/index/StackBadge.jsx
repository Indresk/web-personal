import { useState } from 'react';

const StackElements = ['React', 'Node.js', 'AEM', 'Next.js'];

export default function StackBadge() {
	const stackBadgeState =
		JSON.parse(sessionStorage.getItem('stackBadgeState')) ?? true;
	const [active, setActive] = useState(stackBadgeState);

	function handleClose() {
		sessionStorage.setItem('stackBadgeState', JSON.stringify(!active));
		setActive((prev) => !prev);
	}

	return (
		<div
			className={`lg:flex bg-darkgray/70 backdrop-blur-xl border-l-8 border-primary p-6 shadow-2xl items-center gap-8 z-10 fixed bottom-0 left-0 transition-all ease-in-out duration-200 ${active ? '' : 'translate-y-full'}`}>
			<div className='flex items-center gap-3 flex-wrap'>
				<span className='text-primary font-headline font-black text-xs uppercase tracking-widest'>
					Stack
				</span>
				<div className='flex gap-2'>
					{StackElements.map((element, i) => (
						<span
							key={i}
							className='bg-secondary/10 text-lightergray px-3 py-1 text-[10px] font-bold font-headline uppercase tracking-tighter'>
							{element}
						</span>
					))}
				</div>
			</div>
			<span
				onClick={() => handleClose()}
				className={`fixed  w-10 h-10 bg-darkgray text-white flex justify-center items-center transition-all ease-in-out duration-200 ${active ? '-top-4 md:-top-2 right-0 md:-right-2 rounded-full' : '-top-8 right-0 rounded-t-full'}`}>
				{active ? (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className=''>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M18 6l-12 12' />
						<path d='M6 6l12 12' />
					</svg>
				) : (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width={24}
						height={24}
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'
						className=''>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M6 15l6 -6l6 6' />
					</svg>
				)}
			</span>
		</div>
	);
}
