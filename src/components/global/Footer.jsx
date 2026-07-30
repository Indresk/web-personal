export default function Footer() {
	return (
		<footer className='w-full flex flex-col md:flex-row justify-between items-center px-6 py-8 bg-secondary border-t-8 border-primary'>
			<div className='text-primary text-sm font-bold uppercase tracking-widest mb-4 md:mb-0'>
				Frontend React Developer
			</div>
			<div className='flex gap-8'>
				<a
					className='text-zinc-400  text-xs font-bold uppercase tracking-widest hover:text-primary hover:translate-x-1 transition-transform'
					href='https://www.linkedin.com/in/rafael-salcedo-a70a96272/'
					target='_blank'
					rel='noopener noreferrer'>
					LinkedIn
				</a>
				<a
					className='text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-primary hover:translate-x-1 transition-transform'
					href='https://github.com/Indresk/'
					target='_blank'
					rel='noopener noreferrer'>
					GitHub
				</a>
				<a
					className='text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-primary hover:translate-x-1 transition-transform'
					href='https://github.com/Indresk/web-personal.git'
					target='_blank'
					rel='noopener noreferrer'>
					Source Code
				</a>
			</div>
		</footer>
	);
}
