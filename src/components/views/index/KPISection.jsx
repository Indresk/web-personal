const KPIs = [
	{ value: '4+', title: 'Years of Engineering' },
	{ value: '15+', title: 'Major AEM Projects' },
	{ value: '99%', title: 'Code Coverage Rate' },
	{ value: 'Global', title: 'Content Standards' },
];

export default function KPISection() {
	return (
		<section className='col-span-12 bg-secondary text-white py-16 px-6 md:px-24'>
			<div className='max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12'>
				{KPIs.map((kpi, i) => (
					<div key={i} className='flex flex-col gap-1'>
						<span className='text-primary font-headline text-5xl font-black'>
							{kpi.value}
						</span>
						<span className='text-surface-variant font-headline font-bold text-xs uppercase tracking-[0.3em]'>
							{kpi.title}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
