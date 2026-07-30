import { LinkTo } from '../components/navigation/LinkTo';
import TestModal from '../components/views/projects/TestModal';
import Button from '../components/visual/buttons/Button';
import SectionEyebrow from '../components/visual/containers/SectionEyebrow';
import SidesSeparator from '../components/visual/containers/SidesSeparator';

export default function Projects() {
	return (
		<>
			<SidesSeparator id='hero'>
				<SectionEyebrow>Portfolio Archive</SectionEyebrow>
				<h1 className='font-headline text-5xl lg:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8'>
					PROJECT
					<br />
					<span className='text-primary-container bg-secondary text-primary px-4 py-1 inline-block mt-2'>
						GALLERY
					</span>
				</h1>
				<p className='text-secondary'>
					A selection of my frontend, full-stack, and CMS-based projects,
					including React applications and Node.js APIs. Built with a focus on
					scalability, maintainability, and reusability, so each solution can
					grow smoothly, stay reliable over time, and be adapted for future
					projects.
				</p>
			</SidesSeparator>
			<SidesSeparator>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-0'>
					<article className='lg:col-span-2 relative bg-lightergray border-r-0 border-b-0 overflow-hidden'>
						<div className='aspect-video w-full overflow-hidden'>
							<img
								alt=''
								className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
								src='https://www.gmc.com/content/dam/gmc/na/us/english/index/masthead/jun26/2026_GMC_Masthead_Baked-Offer_Truck-Month_2500x1111.png'
							/>
						</div>
						<div className='p-8 bg-white lg:absolute lg:bottom-0 lg:left-0 lg:w-2/3 border-t-8 border-primary'>
							<div className='flex gap-2 mb-4'>
								<span className='bg-lightergray px-3 py-1 text-[10px] font-bold uppercase'>
									Adobe Experience Manager
								</span>
							</div>
							<h3 className='text-4xl font-bold tracking-tighter mb-4'>
								General Motors Content Operations & Digital Experience
							</h3>
							<p className='font-body text-secondary mb-6 text-sm leading-relaxed'>
								Led enterprise-scale content delivery for GMC while supporting
								Chevrolet, Cadillac, and Buick websites, coordinating
								cross-functional teams and improving content operations through
								process optimization and internal automation.
							</p>
							{/* <LinkTo
								to='/projects/gm-projects'
								message='General Motors Content Operations & Digital Experience'>
								<Button>View Project</Button>
							</LinkTo> */}
						</div>
					</article>
					<article className='relative bg-lightergray border-l-4 border-white overflow-hidden'>
						<div className='aspect-square w-full overflow-hidden'>
							<img
								className='w-full h-full object-cover transition-transform duration-700 hover:scale-105'
								src='https://assets.daliahbanda.com/images/hero/hero-home-sm-1280-960-v2.webp'
							/>
						</div>
						<div className='p-8'>
							<div className='flex gap-2 mb-4 flex-wrap'>
								<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
									Typescript
								</span>
								<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
									Next.js
								</span>
								<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
									ReactJS
								</span>
								<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
									ViteSSR
								</span>
							</div>
							<h3 className='text-2xl font-bold tracking-tighter mb-4'>
								Daliah Banda Platform & Custom CMS
							</h3>
							<p className='font-body text-secondary mb-6 text-xs leading-relaxed'>
								A custom-built content platform that evolved from a stateless
								Vite SSR application into a full Next.js ecosystem powered by a
								bespoke CMS, React Islands architecture, and Node.js backend
								services.
							</p>
							<div className='flex gap-4'>
								{/* <LinkTo
									to='/projects/daliah-platform'
									message='Daliah Banda Platform & Custom CMS'>
									<Button>View Project</Button>
								</LinkTo> */}

								<a
									href='https://github.com/Indresk/DaliahBanda-NextJS-FrontEnd'
									target='_blank'>
									<button className='border-b-2 border-inverse-surface px-2 py-3 font-black uppercase text-xs tracking-widest hover:border-primary transition-all'>
										GitHub
									</button>
								</a>
							</div>
						</div>
					</article>
					<article className='relative bg-lightergray overflow-hidden border-t-4 border-white'>
						<div className='p-8 flex flex-col h-full justify-between'>
							<div>
								<div className='flex gap-2 mb-4'>
									<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
										WordPress
									</span>
								</div>
								<h3 className='text-3xl font-bold tracking-tighter mb-4'>
									Video Game Tournament Platforms
								</h3>
								<p className='font-body text-secondary mb-6 text-sm leading-relaxed'>
									A collection of gaming tournament websites featuring live
									broadcasts, community engagement tools, customer support
									workflows, and dynamic content management built on WordPress.
								</p>
							</div>
							<div className='aspect-video w-full bg-inverse-surface p-4 flex items-center justify-center'>
								<img
									src='https://portafolio.daliahbanda.com/ev-projects/bienestar-live-compensar/1.jpg'
									alt=''
								/>
							</div>
							{/* <LinkTo
								to='/projects/tournament-platforms'
								message='Video Game Tournament Platforms'>
								<button className='mt-6 border-b-2 border-inverse-surface px-2 py-3 font-black uppercase text-xs tracking-widest self-start hover:border-primary transition-all'>
									Archive
								</button>
							</LinkTo> */}
						</div>
					</article>
					<article className='lg:col-span-2 relative bg-lightergray border-t-4 border-l-4 border-white overflow-hidden flex flex-col lg:flex-row'>
						<div className='lg:w-1/2 overflow-hidden'>
							<img
								alt=''
								className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
								src='https://portafolio.daliahbanda.com/internal-projects/ableton-controller-1.png'
							/>
						</div>
						<div className='lg:w-1/2 p-8 flex flex-col justify-center'>
							<div className='flex gap-2 mb-4'>
								<span className='bg-primary px-3 py-1 text-[10px] font-bold uppercase'>
									Socket.io
								</span>
								<span className='bg-primary px-3 py-1 text-[10px] font-bold uppercase'>
									React
								</span>
								<span className='bg-primary px-3 py-1 text-[10px] font-bold uppercase'>
									NodeJS
								</span>
							</div>
							<h3 className='text-4xl font-bold tracking-tighter mb-4'>
								Ableton Live - Setlist Controller
							</h3>
							<p className='font-body text-secondary mb-8 text-sm leading-relaxed'>
								A real-time performance control system that connects directly to
								Ableton Live, allowing musicians to manage setlists, navigate
								locators, and synchronize live session data through a web
								interface.
							</p>
							<div className='flex gap-6 items-center'>
								{/* <LinkTo
									to='/projects/ableton-controller'
									message='Ableton Live - Setlist Controller'>
									<Button>Explore</Button>
								</LinkTo> */}
								<a
									href='https://github.com/Indresk/Ableton-Setlist-Controller'
									target='_blank'>
									<button className='border-b-2 border-inverse-surface px-2 py-3 font-black uppercase text-xs tracking-widest hover:border-primary transition-all'>
										GitHub
									</button>
								</a>
							</div>
						</div>
					</article>
					{/* <article className='relative bg-lightergray overflow-hidden border-t-4 border-white'>
						<div className='p-8 flex flex-col h-full justify-between'>
							<div>
								<div className='flex gap-2 mb-4'>
									<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
										WordPress
									</span>
								</div>
								<h3 className='text-3xl font-bold tracking-tighter mb-4'>
									Video Game Tournament Platforms
								</h3>
								<p className='font-body text-secondary mb-6 text-sm leading-relaxed'>
									A collection of gaming tournament websites featuring live
									broadcasts, community engagement tools, customer support
									workflows, and dynamic content management built on WordPress.
								</p>
							</div>
							<LinkTo
								to='/projects/tournament-platforms'
								message='Video Game Tournament Platforms'>
								<Button>Test01</Button>
							</LinkTo>
						</div>
					</article>
					<article className='relative bg-lightergray overflow-hidden border-t-4 border-white'>
						<div className='p-8 flex flex-col h-full justify-between'>
							<div>
								<div className='flex gap-2 mb-4'>
									<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
										WordPress
									</span>
								</div>
								<h3 className='text-3xl font-bold tracking-tighter mb-4'>
									Video Game Tournament Platforms
								</h3>
								<p className='font-body text-secondary mb-6 text-sm leading-relaxed'>
									A collection of gaming tournament websites featuring live
									broadcasts, community engagement tools, customer support
									workflows, and dynamic content management built on WordPress.
								</p>
							</div>
							<LinkTo
								to='/projects/tournament-platforms'
								message='Video Game Tournament Platforms'>
								<Button>Test01</Button>
							</LinkTo>
						</div>
					</article>
					<article className='relative bg-lightergray overflow-hidden border-t-4 border-white'>
						<div className='p-8 flex flex-col h-full justify-between'>
							<div>
								<div className='flex gap-2 mb-4'>
									<span className='bg-darkgray text-white px-3 py-1 text-[10px] font-bold uppercase'>
										WordPress
									</span>
								</div>
								<h3 className='text-3xl font-bold tracking-tighter mb-4'>
									Video Game Tournament Platforms
								</h3>
								<p className='font-body text-secondary mb-6 text-sm leading-relaxed'>
									A collection of gaming tournament websites featuring live
									broadcasts, community engagement tools, customer support
									workflows, and dynamic content management built on WordPress.
								</p>
							</div>
							<LinkTo
								to='/projects/tournament-platforms'
								message='Video Game Tournament Platforms'>
								<Button>Test01</Button>
							</LinkTo>
						</div>
					</article> */}
				</div>
			</SidesSeparator>
		</>
	);
}
