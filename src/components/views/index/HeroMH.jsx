import { useEffect,useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import TextDecorationBar from '../../visual/containers/TextDecorationBar';

gsap.registerPlugin(useGSAP,SplitText);


export default function HeroMH(){
    const containerRef = useRef();
    const textRef = useRef();
    const [animation, setAnimation] = useState(null);
    const splitRef = useRef();

    useEffect(() => {
        let ticking = false;
        const setupSplit = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                if (splitRef.current) splitRef.current.revert();
                splitRef.current = SplitText.create(textRef.current, { type: "chars,words,lines" });
                ticking = false;
            });
        };

        window.addEventListener('resize', setupSplit);
        setTimeout(()=>playChars(),100)
        return () => window.removeEventListener('resize', setupSplit);
    }, []);

    const playChars = () => {
        animation?.revert();
        const anim = gsap.from(splitRef.current.chars, {
            x: 150,
            opacity: 0,
            duration: 0.7,
            ease: "power4",
            stagger: 0.04
        });
        setAnimation(anim);
    };

    const playWords = () => {
        animation?.revert();
        const anim = gsap.from(splitRef.current.words, {
            y: -100,
            opacity: 0,
            rotation: "random(-80, 80)",
            duration: 0.7,
            ease: "back",
            stagger: 0.15
        });
        setAnimation(anim);
    };

    const playLines = () => {
        animation?.revert();
        const anim = gsap.from(splitRef.current.lines, {
            rotationX: -100,
            transformOrigin: "50% 50% -160px",
            opacity: 0,
            duration: 0.8,
            ease: "power3",
            stagger: 0.25
        });
        setAnimation(anim);
    };

    useGSAP(() => {
        document.fonts.ready.then(() => {
            splitRef.current = SplitText.create(textRef.current, { type: "chars,words,lines" });
        });
    }, { scope: containerRef });



    return(
        <div ref={containerRef} className="p-8">
            <TextDecorationBar color="secondary">
                <p ref={textRef} className="text-2xl md:text-4xl">React Developer | Adobe Experience Manager (AEM) Content Lead | Frontend Engineer</p>
            </TextDecorationBar>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            </div>
        </div>
    )
}