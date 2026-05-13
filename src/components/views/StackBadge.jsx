const StackElements = ['React', 'Node.js', 'AEM', 'Next.js'];

export default function StackBadge() {
	return (
		<div className='absolute top-1 left-1 lg:flex bg-darkgray/70 backdrop-blur-xl border-l-8 border-primary p-6 shadow-2xl items-center gap-8 z-10'>
			<div className='flex items-center gap-3'>
				<span className='text-primary font-headline font-black text-xs uppercase tracking-widest'>
					Stack
				</span>
				<div className='flex gap-2'>
					{StackElements.map((element, i) => (
						<span
							key={i}
							className='bg-secondary/10 text-whitebg px-3 py-1 text-[10px] font-bold font-headline uppercase tracking-tighter'>
							{element}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
