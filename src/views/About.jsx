import CertificationInfo from '../components/views/about/CertificationInfo';
import LangInfo from '../components/views/about/LangInfo';
import SectionEyebrow from '../components/visual/containers/SectionEyebrow';
import SidesSeparator from '../components/visual/containers/SidesSeparator';
import TextDecorationBar from '../components/visual/containers/TextDecorationBar';
import TextSymbol from '../components/visual/TextSymbol';

const certifications = [
	{ name: 'Backend Programming I: Advanced Backend Development', year: '2026' },
	{ name: 'ReactJS', year: '2026' },
	{ name: 'JavaScript', year: '2025' },
	{ name: 'Web Development', year: '2025' },
	{ name: 'UX Design', year: '2025' },
	{ name: 'Electric Installations Technician', year: '2018' },
	{ name: 'High School Diploma', year: '2018' },
];

const lenguages = [
	{
		lenguage: 'ENGLISH',
		level: 80,
		copy: 'Professional B2 Upper Intermediate',
	},
	{
		lenguage: 'SPANISH',
		level: 100,
		copy: 'Native Speaker',
	},
];

export default function About() {
	return (
		<>
			<SidesSeparator
				id='bio'
				className='flex gap-10 flex-col-reverse md:flex-row items-center'>
				<div>
					<SectionEyebrow>Technical Identity</SectionEyebrow>
					<h1 className='text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8'>
						RAFAEL
						<br /> SALCEDO VARGAS
					</h1>
					<p className='text-2xl text-gray-600'>
						Frontend Developer with a strong background in building and
						maintaining scalable web platforms. Specialized in creating
						high-performance user interfaces and robust technical architectures.
					</p>
				</div>
				<div className='border-primary border-r-8 border-t-8 p-2 h-fit'>
					<img src='./MainPhoto.jpg' alt='' />
				</div>
			</SidesSeparator>
			<SidesSeparator id='stack'>
				<SectionEyebrow>Technical Stack</SectionEyebrow>
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
					<div className='md:col-span-2 bg-darkgray p-10 text-white border-l-8 border-primary'>
						<TextSymbol className='text-4xl mb-6'>terminal</TextSymbol>
						<h3 className='text-3xl font-bold mb-6'>FRONTEND ARCHITECTURE</h3>
						<div className='space-y-6'>
							<div className='skill-item'>
								<div className='flex justify-between mb-2 font-bold text-xs tracking-widest uppercase'>
									<span>React & Ecosystem</span>
									<span>95%</span>
								</div>
								<div className='w-full bg-secondary/30 h-1'>
									<div className='bg-primary w-[95%] h-full'></div>
								</div>
							</div>
							<div className='skill-item'>
								<div className='flex justify-between mb-2 font-bold text-xs tracking-widest uppercase'>
									<span>JavaScript (ES6+)</span>
									<span>90%</span>
								</div>
								<div className='w-full bg-secondary/30 h-1'>
									<div className='bg-primary w-[90%] h-full'></div>
								</div>
							</div>
							<div className='grid grid-cols-2 gap-4 pt-4'>
								<div className='bg-secondary p-3 text-sm font-bold text-center'>
									HTML5
								</div>
								<div className='bg-secondary p-3 text-sm font-bold text-center'>
									CSS3 / SCSS
								</div>
							</div>
						</div>
					</div>
					<TextDecorationBar
						className='bg-lightergray p-8'
						color='primary'
						position='bottom'>
						<TextSymbol className='text-3xl mb-4'>database</TextSymbol>
						<h3 className='text-xl font-bold mb-4 uppercase'>
							Backend &amp; API
						</h3>
						<ul className='space-y-3 font-body text-secondary font-medium'>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> Node.js
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> Express
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> REST APIs
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> JSON Logic
							</li>
						</ul>
					</TextDecorationBar>
					<TextDecorationBar
						className='bg-lightergray p-8'
						color='primary'
						position='right'>
						<TextSymbol className='text-3xl mb-4'>settings_suggest</TextSymbol>
						<h3 className='text-xl font-bold mb-4 uppercase'>
							CMS / Platforms
						</h3>
						<ul className='space-y-3 font-body text-secondary font-medium'>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> Adobe Experience
								Manager
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> WordPress
							</li>
							<li className='flex items-center gap-2'>
								<span className='w-2 h-2 bg-primary'></span> Contentful
							</li>
						</ul>
					</TextDecorationBar>
					<TextDecorationBar className='bg-lightergray p-8' color='primary'>
						<TextSymbol className='text-3xl mb-4'>storage</TextSymbol>
						<h3 className='text-xl font-bold mb-4 uppercase'>Databases</h3>
						<div className='flex flex-wrap gap-2'>
							<span className='bg-lightgray px-3 py-1 text-xs font-bold uppercase'>
								MongoDB
							</span>
							<span className='bg-lightgray px-3 py-1 text-xs font-bold uppercase'>
								Firebase
							</span>
							<span className='bg-lightgray px-3 py-1 text-xs font-bold uppercase'>
								PostgreSQL
							</span>
						</div>
					</TextDecorationBar>
					<div className='md:col-span-2 lg:col-span-3 bg-primary p-10 flex items-center flex-wrap'>
						<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
							<div>
								<h3 className='text-3xl font-bold mb-2 uppercase tracking-tighter'>
									Tools & Agile Workflow
								</h3>
								<p className='font-body text-sm font-medium opacity-80 uppercase tracking-widest'>
									Ensuring quality and structural integrity.
								</p>
							</div>
							<div className='flex flex-wrap gap-4 text-white'>
								<div className='flex items-center gap-2 bg-darkgray px-4 py-2 font-bold'>
									<TextSymbol className='text-sm' color='white'>
										account_tree
									</TextSymbol>
									GIT
								</div>
								<div className='flex items-center gap-2 bg-darkgray px-4 py-2 font-bold'>
									<TextSymbol className='text-sm' color='white'>
										bolt
									</TextSymbol>
									AGILE/SCRUM
								</div>
								<div className='flex items-center gap-2 bg-darkgray px-4 py-2 font-bold'>
									<TextSymbol className='text-sm' color='white'>
										integration_instructions
									</TextSymbol>
									UNIT TESTING
								</div>
							</div>
						</div>
					</div>
				</div>
			</SidesSeparator>
			<SidesSeparator id='academic'>
				<SectionEyebrow>Academic Background</SectionEyebrow>
				<div className='grid grid-cols-1 md:grid-cols-2 items-start md:items-stretch gap-10'>
					<div className='row-span-1 flex flex-col gap-10'>
						<TextDecorationBar color='primary' className='flex flex-col gap-2'>
							<h3 className='block text-4xl mb-1 uppercase tracking-tighter'>
								Full-Stack & Frontend Developer
							</h3>
							<strong className='mb-2'>CoderHouse</strong>
							<p className='text-zinc-500'>
								Full-Stack and Frontend training focused on React and Node.js,
								with emphasis on scalable architecture, maintainable code,
								responsive design, and practical application of modern
								development workflows.
							</p>
						</TextDecorationBar>
						<TextDecorationBar color='gray'>
							<h3 className='block font-bold text-2xl mb-1 uppercase tracking-tighter'>
								Certifications
							</h3>
							{certifications.map((item, i) => (
								<CertificationInfo key={i} year={item.year}>
									{item.name}
								</CertificationInfo>
							))}
						</TextDecorationBar>
					</div>
					<div className='row-span-1 bg-lightergray p-12 '>
						<div className='flex flex-col md:justify-around h-full'>
							<h3 className='block text-3xl md:text-4xl mb-10 uppercase tracking-tighter'>
								Languages & Communication
							</h3>
							<div className='flex flex-col gap-4 pb-8 mb-8 border-b-2 border-zinc-300'>
								{lenguages.map((item, i) => (
									<LangInfo item={item} key={i} />
								))}
							</div>
							<div>
								<h4 className='text-secondary tracking-widest uppercase font-bold mb-4'>
									Professional Statement
								</h4>
								<i className='text-zinc-600'>
									“I build interfaces and systems with the same principle:
									clarity first, scalability always.”
								</i>
							</div>
						</div>
					</div>
				</div>
			</SidesSeparator>
		</>
	);
}
