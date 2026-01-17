"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

type ScrollRevealProps = {
    children: React.ReactNode;
    className?: string;
    offsetY?: number;
    offsetX?: number;
    opacityFrom?: number;
    duration?: number;
    delay?: number;
    ease?: string;
    stagger?: number;
    as?: keyof React.JSX.IntrinsicElements;
    scale?: number;
    rotate?: number;
}

const ScrollReveal = ({
    children,
    className,
    offsetY = 30,
    offsetX = 0,
    opacityFrom = 0,
    duration = 1.2,
    delay = 0,
    ease = "expo.out",
    stagger,
    as: Wrapper = "div",
    scale = 1,
    rotate = 0,

}: ScrollRevealProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;
        gsap.registerPlugin(ScrollTrigger);

        const element = containerRef.current as unknown as HTMLElement | null;
        if (!element) return;

        const targets: gsap.TweenTarget = typeof stagger === "number" ? (element as HTMLElement).querySelectorAll(":scope > *") : element;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                targets,
                {
                    opacity: opacityFrom,
                    y: offsetY,
                    x: offsetX,
                    scale: scale,
                    rotate: rotate,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    scale: 1,
                    rotate: 0,
                    duration: duration,
                    delay: delay,
                    ease: ease,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play none none reverse",
                        once: true,
                    }
                }
            )
        }, element);

        return () => {
            ctx.revert();
        }


    }, [offsetY, offsetX, opacityFrom, duration, delay, ease, stagger, scale, rotate]);

    const Tag = Wrapper as any
    return (
        <Tag ref={containerRef} className={className}>
            {children}
        </Tag>
    )
}

export default ScrollReveal