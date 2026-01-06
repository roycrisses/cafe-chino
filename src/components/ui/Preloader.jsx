import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const Preloader = ({ setLoading }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [setLoading]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background text-cream overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coffee/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="text-center relative z-10">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-6"
                    >
                        <Coffee size={72} className="text-coffee drop-shadow-[0_0_20px_rgba(198,156,109,0.5)]" />
                    </motion.div>
                    <h1 className="text-5xl font-display font-black mb-2">
                        Cafe Chino<span className="text-coffee">.</span>
                    </h1>
                    <p className="text-cream/60 text-sm tracking-widest uppercase mb-6">Brewing Your Experience</p>
                    <div className="mt-4 h-1 w-48 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.8, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-coffee via-coffee-dark to-coffee shadow-[0_0_10px_rgba(198,156,109,0.5)]"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
