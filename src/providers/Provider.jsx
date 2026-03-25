import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Provider({children}){
    const lenisRef = useRef()

    useEffect(() => {
        function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
        }

        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        return () => gsap.ticker.remove(update)
    }, [])

    return(
        <StrictMode>
            <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </ReactLenis>
        </StrictMode>
    )
}