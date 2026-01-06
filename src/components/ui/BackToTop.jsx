import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-coffee to-coffee-dark text-white flex items-center justify-center shadow-[0_10px_40px_rgba(198,156,109,0.4)] hover:shadow-[0_20px_60px_rgba(198,156,109,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/10"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp size={24} className="group-hover:animate-bounce" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
