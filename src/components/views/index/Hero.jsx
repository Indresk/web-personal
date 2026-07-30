import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Button from '../../visual/buttons/Button';
import TextDecorationBar from '../../visual/containers/TextDecorationBar';
import { LinkTo } from '../../navigation/LinkTo';

gsap.registerPlugin(useGSAP, SplitText);

const roleLabels = [
	'React Developer',
	'Adobe Experience Manager (AEM) Content Lead',
	'Frontend Engineer',
];

export default function Hero() {
	const containerRef = useRef(null);
	const textRef = useRef(null);
	const splitRef = useRef(null);
	const tlRef = useRef(null);
	const currentRoleRef = useRef(roleLabels[0]);
	const indexRoleRef = useRef(0);
	const isPausedRef = useRef(false);
	const isMountedRef = useRef(false);

	const getNextRole = () => {
		if (roleLabels.length <= 1) return roleLabels[0];
		indexRoleRef.current = (indexRoleRef.current + 1) % roleLabels.length;
		return roleLabels[indexRoleRef.current];
	};

	const cleanupSplit = () => {
		splitRef.current?.revert();
		splitRef.current = null;
	};

	const setSplit = (value) => {
		if (!textRef.current) return null;

		cleanupSplit();
		textRef.current.textContent = value;

		splitRef.current = SplitText.create(textRef.current, {
			type: 'chars,words',
			aria: 'auto',
		});

		return splitRef.current;
	};

	const runCycle = () => {
		if (!isMountedRef.current || !textRef.current) return;

		const split = setSplit(currentRoleRef.current);
		if (!split?.chars?.length) return;

		gsap.set(textRef.current, { autoAlpha: 1 });
		gsap.set(split.chars, {
			x: 150,
			y: 0,
			autoAlpha: 0,
		});

		tlRef.current?.kill();

		tlRef.current = gsap.timeline({
			paused: isPausedRef.current,
			onComplete: () => {
				cleanupSplit();

				if (!textRef.current || !isMountedRef.current) return;

				gsap.set(textRef.current, { autoAlpha: 0 });

				currentRoleRef.current = getNextRole();

				runCycle();
			},
		});

		tlRef.current
			.to(split.chars, {
				x: 0,
				autoAlpha: 1,
				duration: 0.7,
				ease: 'power4.out',
				stagger: 0.04,
			})
			.to({}, { duration: 2 })
			.to(split.chars, {
				// y: -60,
				autoAlpha: 0,
				duration: 0.7,
				ease: 'power4.in',
				stagger: { each: 0.04, from: 'end' },
			})
			.to(textRef.current, {
				autoAlpha: 0,
				duration: 0.01,
			});
	};

	useGSAP(
		() => {
			if (!textRef.current) return;
			isMountedRef.current = true;

			gsap.set(textRef.current, { autoAlpha: 0 });

			const start = () => {
				if (!isMountedRef.current) return;
				runCycle();
			};

			document.fonts.ready.then(start);

			const node = textRef.current;

			const handleMouseEnter = () => {
				isPausedRef.current = true;
				tlRef.current?.pause();
			};

			const handleMouseLeave = () => {
				isPausedRef.current = false;
				tlRef.current?.resume();
			};

			node.addEventListener('mouseenter', handleMouseEnter);
			node.addEventListener('mouseleave', handleMouseLeave);

			return () => {
				isMountedRef.current = false;
				node.removeEventListener('mouseenter', handleMouseEnter);
				node.removeEventListener('mouseleave', handleMouseLeave);
				tlRef.current?.kill();
				cleanupSplit();
			};
		},
		{ scope: containerRef },
	);

	return (
		<div
			ref={containerRef}
			className='px-6 md:px-16 lg:px-24 py-10 lg:h-screen flex justify-center flex-col relative'>
			<h1 className='font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8'>
				RAFAEL
				<br />
				SALCEDO
				<br />
				<span className='text-primary-container bg-secondary text-primary px-4 py-1 inline-block mt-2'>
					VARGAS
				</span>
			</h1>

			<TextDecorationBar color='primary' className='mb-12'>
				<p
					ref={textRef}
					className='font-headline text-xl md:text-2xl font-bold text-on-surface mb-4 w-fit'
					style={{ fontKerning: 'none', textRendering: 'optimizeSpeed' }}>
					{roleLabels[0]}
				</p>

				<p className='font-body text-lg text-secondary leading-relaxed max-w-xl'>
					Frontend Developer with experience in React, Node.js, NextJS, and
					headless CMS architectures. Specializing in high-scale enterprise
					documentation and editorial platforms.
				</p>
			</TextDecorationBar>

			<div className='flex flex-wrap gap-6'>
				<LinkTo to='/projects'>
					<Button className='tracking-widest' size='lg' rigthArrow>
						View My Projects
					</Button>
				</LinkTo>

				<LinkTo to='/experience'>
					<TextDecorationBar
						color='secondary'
						position='bottom'
						className='hover:border-primary'>
						<Button className='tracking-widest pb-2' variant='ghost' size='lg'>
							Experience
						</Button>
					</TextDecorationBar>
				</LinkTo>
			</div>
		</div>
	);
}
