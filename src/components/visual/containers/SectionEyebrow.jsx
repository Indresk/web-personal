export default function SectionEyebrow({ children, className = '' }) {
	return (
		<div className='flex gap-2 items-center mb-8'>
			<span className='w-10 h-1 bg-primary'></span>
			<small className={`uppercase tracking-widest font-bold ${className}`}>
				{children}
			</small>
		</div>
	);
}
