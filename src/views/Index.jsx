import { LinkTo } from '../components/navigation/LinkTo';
import Hero from '../components/views/index/Hero';
import KPISection from '../components/views/index/KPISection';
import StackBadge from '../components/views/index/StackBadge';

export default function Index() {
	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<section className='col-span-12 lg:col-span-7 xl:col-span-8 '>
					<div className='sticky top-0'>
						<Hero />
					</div>
				</section>
				<section className='col-span-12 lg:col-span-5 xl:col-span-4 p-2 z-0'>
					<div className='grid grid-cols-2 grid-rows-4 gap-2'>
						<LinkTo to='/experience' className='col-span-2 row-span-2'>
							<div className=' relative overflow-hidden bg-secondary group'>
								<img
									alt=''
									className='w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 aspect-square'
									src='https://portafolio.daliahbanda.com/internal-projects/ableton-controller-1.png'
								/>
								<div className='absolute inset-0 p-8 flex flex-col justify-end'>
									<div className='bg-primary text-on-primary-fixed inline-block px-3 py-1 font-headline font-bold text-xs uppercase mb-4 w-fit'>
										Featured expertise
									</div>
									<h3 className='text-surface text-white font-headline font-bold text-3xl uppercase '>
										React Development
									</h3>
								</div>
							</div>
						</LinkTo>
						<LinkTo to='/experience' className='col-span-1 row-span-1'>
							<div className='bg-primary bg-primary-container p-6 flex flex-col justify-between aspect-square'>
								<span
									className='material-symbols-outlined text-4xl text-on-primary-container'
									data-icon='code'
									data-weight='fill'>
									code
								</span>
								<div className='font-headline font-black text-on-primary-container text-lg leading-tight uppercase'>
									AEM <br />
									Authoring
								</div>
							</div>
						</LinkTo>
						<LinkTo to='/experience' className='col-span-1 row-span-1'>
							<div className=' bg-lightergray p-6 flex flex-col justify-between aspect-square'>
								<div className='font-headline font-black text-on-surface text-lg leading-tight uppercase'>
									REST <br />
									Api
								</div>
							</div>
						</LinkTo>
						<LinkTo
							to='/experience'
							className='col-span-1 row-span-1 aspect-square'>
							<div className=' relative overflow-hidden bg-black'>
								<img
									alt=''
									className='w-full h-full object-cover aspect-square mask-t-from-5'
									src='https://portafolio.daliahbanda.com/ev-projects/compensar-asphalt/1.jpg'
								/>

								<div className='absolute top-6 left-6 font-headline font-black text-white text-on-surface text-lg leading-tight uppercase'>
									WordPress <br />
									Management
								</div>
							</div>
						</LinkTo>
						<LinkTo to='/about' className='col-span-1 row-span-1'>
							<div className=' bg-secondary p-6 flex flex-col justify-end items-end aspect-square'>
								<div className='font-headline font-black text-white text-on-surface text-lg leading-tight uppercase'>
									About Me
								</div>
							</div>
						</LinkTo>
					</div>
				</section>
				<KPISection />
				<StackBadge />
			</div>
		</>
	);
}
