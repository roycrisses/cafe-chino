import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [cursorX, cursorY]);

    // Hide on mobile/tablet
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <motion.div
                    className="w-full h-full rounded-full border-2 border-coffee"
                    animate={{
                        scale: isHovering ? 1.5 : 1,
                        backgroundColor: isHovering ? 'rgba(198, 156, 109, 0.2)' : 'rgba(198, 156, 109, 0)',
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </motion.div>

            {/* Cursor dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    opacity: isVisible ? 1 : 0,
                    translateX: 15,
                    translateY: 15,
                }}
            >
                <div className="w-full h-full rounded-full bg-coffee" />
            </motion.div>
        </>
    );
};

export default CustomCursor;
