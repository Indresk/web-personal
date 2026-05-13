import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const LoadOverlay = forwardRef(function LoadOverlay(_, ref) {
	const rootRef = useRef(null);
	const timelineRef = useRef(null);
	const resolverRef = useRef(null);
	const middleCallbackRef = useRef(null);

	const [message, setMessage] = useState('MESSAGE');
	const [isVisible, setIsVisible] = useState(false);

	const buildTimeline = ({
		holdDuration = 0.7,
		startAtMiddle = false,
		onMiddle,
	} = {}) => {
		const q = gsap.utils.selector(rootRef);
		const layer1 = q('.layer-1 > div')[0];
		const layer2 = q('.layer-2 > div')[0];
		const layer3 = q('.layer-3 > div')[0];

		middleCallbackRef.current = onMiddle ?? null;

		timelineRef.current?.kill();

		gsap.set(rootRef.current, {
			autoAlpha: 1,
			pointerEvents: 'auto',
		});

		gsap.set([layer1, layer2], {
			scale: 0,
			skewY: 10,
			autoAlpha: 0,
			transformOrigin: '50% 50%',
		});

		gsap.set(layer3, {
			autoAlpha: 0,
			scale: 0.92,
			y: 16,
		});

		const tl = gsap.timeline({
			paused: true,
			onComplete: () => {
				gsap.set(rootRef.current, {
					autoAlpha: 0,
					pointerEvents: 'none',
				});
				setIsVisible(false);
				resolverRef.current?.();
				resolverRef.current = null;
			},
		});

		tl.to(
			layer1,
			{
				scale: 30,
				skewY: 0,
				autoAlpha: 1,
				duration: 0.55,
				ease: 'power4.inOut',
			},
			0,
		)
			.to(
				layer2,
				{
					scale: 30,
					skewY: 0,
					autoAlpha: 1,
					duration: 0.55,
					ease: 'power4.inOut',
				},
				0.08,
			)
			.to(
				layer3,
				{
					autoAlpha: 1,
					scale: 1,
					y: 0,
					duration: 0.28,
					ease: 'power2.out',
				},
				'-=0.08',
			)
			.addLabel('middle')
			.add(() => {
				middleCallbackRef.current?.();
			})
			.to({}, { duration: holdDuration })
			.to(layer3, {
				autoAlpha: 0,
				scale: 0.96,
				y: -12,
				duration: 0.22,
				ease: 'power2.in',
			})
			.to(
				layer2,
				{
					scale: 0,
					skewY: -10,
					autoAlpha: 0,
					duration: 0.5,
					ease: 'power4.inOut',
				},
				'-=0.02',
			)
			.to(
				layer1,
				{
					scale: 0,
					skewY: -10,
					autoAlpha: 0,
					duration: 0.5,
					ease: 'power4.inOut',
				},
				'-=0.4',
			);

		if (startAtMiddle) {
			tl.pause(0);
			gsap.set([layer1, layer2], {
				scale: 30,
				skewY: 0,
				autoAlpha: 1,
			});
			gsap.set(layer3, {
				autoAlpha: 1,
				scale: 1,
				y: 0,
			});
			tl.seek('middle');
		}

		timelineRef.current = tl;
		return tl;
	};

	useImperativeHandle(ref, () => ({
		play(config = {}) {
			setMessage(config.message ?? 'MESSAGE');
			setIsVisible(true);

			return new Promise((resolve) => {
				resolverRef.current = resolve;

				requestAnimationFrame(() => {
					const tl = buildTimeline(config);
					tl.play();
				});
			});
		},
	}));

	useGSAP(
		() => {
			if (!rootRef.current) return;

			gsap.set(rootRef.current, {
				autoAlpha: 0,
				pointerEvents: 'none',
			});

			return () => {
				timelineRef.current?.kill();
			};
		},
		{ scope: rootRef },
	);

	return (
		<div
			ref={rootRef}
			className='fixed inset-0 z-50 grid w-screen h-screen'
			aria-hidden={!isVisible}>
			<div className='layer-1 [grid-area:1/1] w-full h-full flex justify-center items-center overflow-hidden'>
				<div className='w-30 h-30 rounded-4xl bg-primary will-change-transform' />
			</div>

			<div className='layer-2 [grid-area:1/1] w-full h-full flex justify-center items-center overflow-hidden'>
				<div className='w-30 h-30 rounded-full bg-secondary will-change-transform' />
			</div>

			<div className='layer-3 [grid-area:1/1] w-full h-full flex justify-center items-center'>
				<div className='font-headline text-2xl md:text-4xl font-bold text-on-surface tracking-widest uppercase text-white'>
					{message}
				</div>
			</div>
		</div>
	);
});
