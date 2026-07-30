import { useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './testingStyles.css'

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Boxes() {
  const lenis = useLenis();

  const container = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  // Sincronización Lenis + ScrollTrigger
  useEffect(() => {
    if (!lenis) return;

    // Lenis notifica a ScrollTrigger en scrolls
    const unsubscribeScroll = lenis.on('scroll', ScrollTrigger.update);
    
    // Config en cada compoente GSAP con Lenis que lo use
    ScrollTrigger.refresh();

    return () => {
      unsubscribeScroll();
      ScrollTrigger.clearScrollMemory();
    };
  }, [lenis]);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();

      //Animaciones ScrollTrigger
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
    },
    { scope: container }
  );

  return (
    <main>
      <section style={{ background: '#f0f0f0', padding: '2rem' }}>
        <h1>Scroll abajo para ver fade-in + slide-up suave con Lenis + ScrollTrigger</h1>
        <p>Botón toggle anima independientemente. ¡Prueba scroll lento!</p>
      </section>
      
      <section className="boxes-container" ref={container}>
        <h2>Sección con ScrollTrigger</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline (cajas principales)</button>
        </div>
        <div className="box gradient-blue">Box 1 (Scroll + Toggle)</div>
        <div className="box gradient-blue">Box 2 (Scroll + Toggle)</div>
        <div className="box gradient-blue">Box 3 (Scroll + Toggle)</div>
        <div style={{ height: '100vh' }} />
      </section>
    </main>
  );
}