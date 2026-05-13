import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, SplitText);

export default function TestAnimationSplit() {
	const containerRef = useRef();
	const textRef = useRef();
	const splitRef = useRef();
	const animationRef = useRef();

	const playWords = () => {
		if (animationRef.current) {
			animationRef.current.revert();
			animationRef.current = null;
		}
		if (!splitRef.current?.words?.length) return;

		const anim = gsap.from(splitRef.current.words, {
			x: 150,
			opacity: 0,
			duration: 0.7,
			ease: 'power4',
			stagger: 0.24,
		});
		animationRef.current = anim;
	};

	const playChars = () => {
		if (animationRef.current) {
			animationRef.current.revert();
			animationRef.current = null;
		}
		if (!splitRef.current?.chars?.length) return;

		const anim = gsap.from(splitRef.current.chars, {
			x: 150,
			opacity: 0,
			duration: 0.7,
			ease: 'power4',
			stagger: 0.04,
		});
		animationRef.current = anim;
	};

	const setupSplit = () => {
		if (!textRef.current) return;
		if (splitRef.current) splitRef.current.revert();

		splitRef.current = SplitText.create(textRef.current, {
			type: 'chars,words,lines',
		});
	};

	useGSAP(
		() => {
			document.fonts.ready.then(() => {
				setupSplit();
				playChars();
			});
		},
		{ scope: containerRef },
	);

	useEffect(
		() => () => {
			if (animationRef.current) {
				animationRef.current.kill();
				animationRef.current = null;
			}
			if (splitRef.current) {
				splitRef.current.revert();
				splitRef.current = null;
			}
		},
		[],
	);

	return (
		<div ref={containerRef} className='p-8'>
			<p ref={textRef} className='text-2xl md:text-4xl'>
				React Developer | Adobe Experience Manager (AEM) Content Lead | Frontend
				Engineer
			</p>
		</div>
	);
}
