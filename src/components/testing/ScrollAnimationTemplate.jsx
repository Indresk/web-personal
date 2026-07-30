import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ScrollTemplate(){
    const lenis = useLenis();
    const container = useRef();

    useEffect(() => {
        if (!lenis) return;
        const unsubscribeScroll = lenis.on('scroll', ScrollTrigger.update);
        ScrollTrigger.refresh();

        return () => {
            unsubscribeScroll();
            ScrollTrigger.clearScrollMemory();
        };
    }, [lenis]);

    useGSAP(() => {
        gsap.from('.box', {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
            //trigger solo detecta hijos directos si uso clases, si no como acá usar la referencia directa
                trigger: container.current,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true, // Suavizado con scroll
                toggleActions: 'play none none reverse'
            }
        });
    },{ scope: container });    

    return(
        <>
            <section ref={container}>

            </section>
        </>
    )
}