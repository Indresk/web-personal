import SectionEyebrow from '../components/visual/containers/SectionEyebrow';
import SidesSeparator from '../components/visual/containers/SidesSeparator';
import TextDecorationBar from '../components/visual/containers/TextDecorationBar';
import TextSymbol from '../components/visual/TextSymbol';

export default function Experience() {
	return (
		<>
			<SidesSeparator id='hero'>
				<SectionEyebrow>Professional History</SectionEyebrow>
				<h1 className='font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8'>
					TECHNICAL
					<br />
					<span className='text-primary-container bg-secondary text-primary px-4 py-1 inline-block mt-2'>
						CHRONOLOGY.
					</span>
				</h1>
			</SidesSeparator>

			<SidesSeparator
				id='present'
				className='flex flex-col lg:flex-row pb-5 pt-5'>
				<TextDecorationBar
					className='bg-secondary p-8 flex flex-col justify-between basis-full lg:basis-[33%]'
					color='primary'>
					<div className='mb-10'>
						<strong className='text-primary font-black text-xl mb-2'>
							2025 - PRESENT
						</strong>
						<h2 className='text-3xl text-white font-bold leading-tight'>
							Lead AEM Content Analyst
						</h2>
						<h3 className='text-lightgray tracking-wide uppercase text-xs mt-2'>
							MRM / Critical Mass
						</h3>
					</div>
					<div className='flex flex-wrap gap-2 '>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							ADOBE EXPERIENCE MANAGER
						</span>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							Sitecore
						</span>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							Microsoft powerSuite
						</span>
					</div>
				</TextDecorationBar>
				<div className='flex flex-col gap-4 p-8 basis-full lg:basis-[67%]'>
					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Led cross-functional coordination in a self-managed team
							environment, acting as operational backup by aligning PM (client)
							communication, managing team availability (OOO), and resolving
							delivery blockers across projects.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Designed and implemented process improvements for content
							workflows in AEM, including a standardized workflow for shopping
							links implementation, reducing turnaround time.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Built automation systems using PowerTools from Microsoft to track
							support overtime and notify teams proactively, improving time-off
							utilization across LATAM teams (Colombia & Argentina).
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Initiated and structured a training committee on BOG, accelerating
							onboarding and continuous learning for new hires while promoting
							adoption of new tools and best practices.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Developed internal tools (Excel-Macros-based systems) for campaign
							planning (e.g., L'Oréal email calendars), improving visibility and
							coordination between marketing and content teams.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Implemented lightweight HR automation (birthday tracking +
							benefits allocation), improving internal engagement and
							administrative efficiency.
						</p>
					</div>
				</div>
			</SidesSeparator>

			<SidesSeparator
				id='previous'
				className='flex flex-col lg:flex-row pb-5 pt-5'>
				<TextDecorationBar
					className='bg-lightergray p-8 flex flex-col justify-between basis-full lg:basis-[33%]'
					color='secondary'>
					<div className='mb-10'>
						<strong className='text-primary font-black text-xl mb-2'>
							2024 - 2025
						</strong>
						<h2 className='text-3xl text-black font-bold leading-tight'>
							AEM Content Analyst Jr
						</h2>
						<h3 className='text-secondary tracking-wide uppercase text-xs mt-2'>
							MRM - IPG
						</h3>
					</div>
					<div className='flex flex-wrap gap-2 '>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							ADOBE EXPERIENCE MANAGER
						</span>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							Figma
						</span>
					</div>
				</TextDecorationBar>
				<div className='flex flex-col gap-4 p-8 basis-full lg:basis-[67%]'>
					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Delivered high-volume AEM authoring for GM brands (GMC, Chevrolet,
							Cadillac, Buick), including handling urgent (HOT) client requests
							with consistent on-time delivery.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Built and optimized collaboration workflows with QA and PM teams,
							improving delivery efficiency and reducing iteration cycles.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Developed an Excel macro-based ticket tracking system for local
							teams, increasing visibility and prioritization of incoming
							requests
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Identified and resolved a critical UI issue caused by component
							misuse in AEM, proposing a new implementation approach that
							improved UX across GMC and Chevrolet platforms.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Supported international project launches (e.g., Chevrolet Europe)
							by coordinating release timings and ensuring production readiness.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Introduced productivity tools (Microsoft PowerToys) into team
							workflows, training team members and improving operational
							efficiency.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Contributed to onboarding by delivering AEM component training
							sessions for new hires, reducing ramp-up time.
						</p>
					</div>
				</div>
			</SidesSeparator>

			<SidesSeparator className='flex flex-col lg:flex-row pb-5 pt-5'>
				<TextDecorationBar
					className='bg-secondary p-8 flex flex-col justify-between basis-full lg:basis-[33%]'
					color='primary'>
					<div className='mb-10'>
						<strong className='text-primary font-black text-xl mb-2'>
							2020 - 2024
						</strong>
						<h2 className='text-3xl text-white font-bold leading-tight'>
							WebSite Content Editor
						</h2>
						<h3 className='text-lightgray tracking-wide uppercase text-xs mt-2'>
							E+V - GamerFocus
						</h3>
					</div>
					<div className='flex flex-wrap gap-2 '>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							Wordpress
						</span>
					</div>
				</TextDecorationBar>
				<div className='flex flex-col gap-4 p-8 basis-full lg:basis-[67%]'>
					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Designed and implemented a centralized Google Drive-based project
							management structure (assets, copy, schedules), significantly
							improving team accessibility and operational efficiency
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Managed end-to-end execution of multiple large-scale eSports and
							gaming events, including planning, web presence, tournament
							logistics, and user support for public and private sector clients.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Coordinated cross-functional teams (design, development, content)
							to deliver event websites, including wireframing and UX planning
							for new platforms.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Developed tournament management systems (match brackets,
							scheduling, support tracking), improving operational control and
							participant experience.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<p>
							Optimized SEO performance for the digital publication GamerFocus
							using Yoast SEO, increasing search visibility and content
							indexing.
						</p>
					</div>
				</div>
			</SidesSeparator>

			<SidesSeparator className='flex flex-col lg:flex-row pb-5 pt-5'>
				<TextDecorationBar
					className='bg-lightergray p-8 flex flex-col justify-between basis-full lg:basis-[33%]'
					color='secondary'>
					<div className='mb-10'>
						<strong className='text-primary font-black text-xl mb-2'>
							2023 - 2024
						</strong>
						<h2 className='text-3xl text-black font-bold leading-tight'>
							Social Media Content Management
						</h2>
						<h3 className='text-secondary tracking-wide uppercase text-xs mt-2'>
							E+V - GamerFocus
						</h3>
					</div>
					<div className='flex flex-wrap gap-2 '>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							Meta for business
						</span>
						<span className='bg-zinc-600 text-[10px] px-2 py-1 font-bold uppercase tracking-widest text-white'>
							clickup
						</span>
					</div>
				</TextDecorationBar>
				<div className='flex flex-col gap-4 p-8 basis-full lg:basis-[67%]'>
					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Designed a scalable content planning system for social media,
							improving publishing consistency and team coordination.
						</p>
					</div>

					<div className='flex gap-4'>
						<TextSymbol className='text-4xl mb-6' color='secondary'>
							arrow_right_alt
						</TextSymbol>
						<p>
							Collaborated with design and copy teams to produce content that
							increased organic reach and engagement across platforms.
						</p>
					</div>
				</div>
			</SidesSeparator>

			<SidesSeparator
				id='old'
				className='flex flex-col md:flex-row gap-10 pt-5'>
				<TextDecorationBar
					className='bg-secondary p-8 flex flex-col basis-full lg:basis-[50%]'
					color='primary'>
					<div className='mb-10'>
						<strong className='text-primary font-black text-xl mb-2'>
							2022 - 2022
						</strong>
						<h2 className='text-3xl text-white font-bold leading-tight'>
							Logistic Support XIX “Juegos Bolivarianos de Valledupar” 2022
						</h2>
						<h3 className='text-lightgray tracking-wide uppercase text-xs mt-2'>
							E+V - GamerFocus
						</h3>
					</div>
					<div>
						<ul className='text-sm leading-relaxed text-lightergray space-y-3 list-disc list-inside'>
							<li>
								Supported the execution of the esports segment of a major
								international sporting event, implementing online competition
								formats that increased player participation and audience
								engagement during pandemic conditions.
							</li>
							<li>
								Contributed to web-based tournament operations, ensuring smooth
								coordination between digital platforms and event logistics.
							</li>
						</ul>
					</div>
				</TextDecorationBar>
				<TextDecorationBar
					className='bg-lightergray p-8 flex flex-col basis-full lg:basis-[50%]'
					color='secondary'>
					<div className='mb-10'>
						<strong className='text-primary font-black text-xl mb-2'>
							2018 - 2019
						</strong>
						<h2 className='text-3xl text-black font-bold leading-tight'>
							Stand Customer Service - SOFA
						</h2>
						<h3 className='text-secondary tracking-wide uppercase text-xs mt-2'>
							TribuGamer
						</h3>
					</div>
					<div>
						<ul className='text-sm leading-relaxed text-secondary space-y-3 list-disc list-inside'>
							<li>
								Delivered on-site technical and customer support for large-scale
								gaming events, assisting professional players and managing match
								flow and equipment setup.
							</li>
							<li>
								Coordinated booth operations, including participant tracking,
								match organization, and setup/teardown logistics.
							</li>
						</ul>
					</div>
				</TextDecorationBar>
			</SidesSeparator>
		</>
	);
}
