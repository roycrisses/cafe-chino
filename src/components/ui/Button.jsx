import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = {
            x,
            y,
            id: Date.now()
        };

        setRipples([...ripples, newRipple]);
        setTimeout(() => {
            setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
        }, 600);

        if (onClick) onClick(e);
    };

    const variants = {
        primary: 'bg-coffee hover:bg-coffee-dark text-white border-2 border-coffee hover:border-coffee-dark shadow-[0_4px_20px_rgba(198,156,109,0.3)] hover:shadow-[0_8px_30px_rgba(198,156,109,0.5)]',
        outline: 'bg-transparent hover:bg-coffee text-cream hover:text-white border-2 border-cream hover:border-coffee',
        ghost: 'bg-transparent hover:bg-white/10 text-cream border-2 border-transparent hover:border-white/20',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden ${variants[variant]
                } ${className}`}
            {...props}
        >
            {/* Ripple effects */}
            {ripples.map(ripple => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 10,
                        height: 10,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            ))}
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};

export default Button;
