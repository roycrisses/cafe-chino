import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-8 py-3.5 rounded-full font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 text-sm uppercase";

    const variants = {
        primary: "bg-gradient-to-r from-coffee to-coffee-dark text-white hover:shadow-lg hover:shadow-coffee/25 hover:-translate-y-1",
        secondary: "bg-white/5 backdrop-blur-md border border-white/10 text-cream hover:bg-white/10 hover:border-coffee/30 hover:text-white",
        outline: "bg-transparent border border-coffee/30 text-coffee hover:bg-coffee hover:text-white hover:border-coffee",
        'outline-light': "bg-transparent border border-white/20 text-cream hover:bg-white hover:text-background",
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
