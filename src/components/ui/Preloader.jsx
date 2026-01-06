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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background text-cream"
        >
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Coffee size={64} className="text-coffee mb-4" />
                    </motion.div>
                    <h1 className="text-4xl font-display font-bold">
                        Cafe Chino<span className="text-coffee">.</span>
                    </h1>
                    <div className="mt-4 h-1 w-32 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-coffee"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
