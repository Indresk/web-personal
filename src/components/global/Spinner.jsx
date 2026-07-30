const skillIcons = [
	{ id: 'react', alt: 'react', src: 'https://skillicons.dev/icons?i=react' },
	{
		id: 'angular',
		alt: 'angular',
		src: 'https://skillicons.dev/icons?i=angular',
	},
	{ id: 'nextjs', alt: 'nextjs', src: 'https://skillicons.dev/icons?i=nextjs' },
	{ id: 'ts', alt: 'ts', src: 'https://skillicons.dev/icons?i=ts' },
	{ id: 'nodejs', alt: 'nodejs', src: 'https://skillicons.dev/icons?i=nodejs' },
	{ id: 'docker', alt: 'docker', src: 'https://skillicons.dev/icons?i=docker' },
	{ id: 'gcp', alt: 'gcp', src: 'https://skillicons.dev/icons?i=gcp' },
	{
		id: 'firebase',
		alt: 'firebase',
		src: 'https://skillicons.dev/icons?i=firebase',
	},
];

const imageFillStyle = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	left: 0,
	top: 0,
	right: 0,
	bottom: 0,
	color: 'transparent',
};

export default function Spinner() {
	const getOrbitItemStyle = (index, total, radius = '10rem') => {
		const angle = (360 / total) * index;

		return {
			transform: `rotate(${angle}deg) translate(${radius}) rotate(-${angle}deg)`,
		};
	};

	return (
		<div className='fixed -z-10 top-0 left-0 w-screen h-screen flex items-center justify-center opacity-10'>
			<div className='w-80 h-80 flex items-center justify-center scale:100 lg:scale-220 '>
				<div className='absolute inset-0 bg-primary/20 rounded-full blur-[50px] '></div>
				<div className='absolute inset-0 border border-white/10 rounded-full'></div>
				<div className='absolute inset-0 animate-[spin_40s_linear_infinite]'>
					{skillIcons.map((item, index) => (
						<div
							key={item.id}
							className='absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5'
							style={getOrbitItemStyle(index, skillIcons.length)}>
							<div className='w-full h-full bg-black/80 rounded-full border border-primary/50 p-2 shadow-[0_0_10px_#ffde05] flex items-center justify-center '>
								<div className='relative w-full h-full'>
									<img
										alt={item.alt}
										src={item.src}
										loading='lazy'
										decoding='async'
										className='object-contain opacity-90'
										style={imageFillStyle}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className='absolute inset-16 border-4 border-l-primary/80 border-t-primary/20 border-r-primary/80 border-b-primary/20 rounded-full shadow-[0_0_20px_#ffde05] animate-[spin_4s_linear_infinite]'></div>
				<div className='absolute inset-20 border-2 border-dashed border-neon-purple/60 rounded-full animate-[spin_50s_linear_infinite_reverse]'></div>
				<div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
					<div className='w-28 h-28 bg-deep-bg/90 rounded-full border-2 border-primary flex items-center justify-center shadow-[inset_0_0_30px_#ffde05,0_0_30px_#ffde05] overflow-hidden relative'>
						<div className='absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent animate-spin-slow'></div>
						<div className='text-5xl text-secondary animate-pulse z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]'>
							⚛
						</div>
						<div className='absolute inset-0 border-t-4 border-primary/50 rounded-full animate-spin-fast'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
