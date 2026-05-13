import Hero from '../components/views/index/Hero';
import KPISection from '../components/views/index/KPISection';
import StackBadge from '../components/views/StackBadge';

export default function Index() {
	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<section className='col-span-12 lg:col-span-8 '>
					<div className='sticky top-0'>
						<StackBadge />
						<Hero />
					</div>
				</section>
				<section className='lg:col-span-4 p-2 z-0'>
					<div className='grid grid-cols-2 grid-rows-4 gap-2'>
						<div className='col-span-2 row-span-2 relative overflow-hidden bg-secondary group'>
							<img
								alt='Technical Abstract'
								className='w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700'
								data-alt='abstract close-up of dark brushed metal surfaces with sharp geometric edges and glowing amber light accents representing precision engineering'
								src='https://lh3.googleusercontent.com/aida-public/AB6AXuC6leXfjCaQp0e5AWipXYOIrrylHRs-krWidi5Xhfzl1V3rB_JHS6J30N4LkiaVe6dTtaTA8MqpnkHD7_KWtpWo88cx7h6R79k7ZOy8-0ITvE2zI7XI9scpPRp-uXrif2BOGs71Ii8fRtftkfxCYAT0JCB8X457zq6rG4Y5KnKm0YVQyYBGXbBJbACD3lAFVsKCp683aIHAsiitEEkKWeEvQ4jQkvmVWN2AYEUU-W7WFin_niZDzzxCwbc72RuUR71_RGlspSy0Ilc'
							/>
							<div className='absolute inset-0 p-8 flex flex-col justify-end '>
								<div className='bg-primary text-on-primary-fixed inline-block px-3 py-1 font-headline font-bold text-xs uppercase mb-4 w-fit'>
									Featured expertise
								</div>
								<h3 className='text-surface text-white font-headline font-bold text-3xl uppercase '>
									AEM Architecture
								</h3>
							</div>
						</div>
						<div className='bg-primary col-span-1 row-span-1 bg-primary-container p-6 flex flex-col justify-between'>
							<span
								className='material-symbols-outlined text-4xl text-on-primary-container'
								data-icon='code'
								data-weight='fill'>
								code
							</span>
							<div className='font-headline font-black text-on-primary-container text-lg leading-tight uppercase'>
								React <br />
								Development
							</div>
						</div>
						<div className='col-span-1 row-span-2 bg-whitebg p-6 flex flex-col justify-between'>
							<div className='font-headline font-black text-on-surface text-lg leading-tight uppercase'>
								Headless <br />
								Solutions
							</div>
							<span
								className='material-symbols-outlined text-4xl text-outline'
								data-icon='hub'>
								hub
							</span>
						</div>
						<div className='col-span-1 row-span-1 relative overflow-hidden'>
							<img
								alt='Coding Detail'
								className='w-full h-full object-cover grayscale'
								data-alt='extreme close up of high definition computer monitor displaying lines of javascript and react code in a dark environment with blue highlights'
								src='https://lh3.googleusercontent.com/aida-public/AB6AXuCJo0IzF1ITbMuo5goUFRkXSn9WMzOi9f5KKoF1pfJ6c--73BYQX8WptaY0poS8Nrcd1j8BvihJXDlLvuDHiGroKDmeEwwyyWxqWh8lUYQ5pW3nWJCn8dKH2kj54S-ORP6FxS3B0ByNdeNfkdd06ioqWgkvzpBzu2OlJya1sJScCDBGYkkTk3aNzcURFv7_roWdTxkB9HObxly72LELz1FTzYrHiQ__uaooNh8Q2hL2Td16rLxYMkz8dR_oNNvpJpNy9zdTuTncCzY'
							/>
						</div>
					</div>
				</section>
				<KPISection />
			</div>
		</>
	);
}
