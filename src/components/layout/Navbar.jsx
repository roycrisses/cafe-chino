import React, { useState, useEffect } from 'react';
import { List, X, Coffee } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className="container mx-auto px-4 md:px-8">
                <div className={`backdrop-blur-xl bg-black/60 border border-white/10 rounded-full px-6 py-3 flex justify-between items-center shadow-lg hover:shadow-coffee/10 transition-all duration-500 ${isScrolled ? 'mx-0 bg-black/80' : 'mx-0 lg:mx-8'}`}>

                    <a href="#home" className="flex items-center gap-2 text-2xl font-display font-bold text-cream group">
                        <div className="w-10 h-10 rounded-full bg-coffee/10 flex items-center justify-center group-hover:bg-coffee/20 transition-colors">
                            <Coffee size={24} weight="fill" className="text-coffee" />
                        </div>
                        <span className="tracking-tight">Cafe Chino<span className="text-coffee">.</span></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[13px] font-semibold text-cream/70 hover:text-white transition-all duration-300 tracking-[0.1em] uppercase group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-coffee transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(198,156,109,0.5)]" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center">
                        <a href="#reservation" className="bg-gradient-to-r from-coffee to-coffee-dark text-white px-7 py-2.5 rounded-full text-xs uppercase tracking-widest font-black hover:shadow-[0_0_20px_rgba(198,156,109,0.3)] hover:scale-105 active:scale-95 transition-all duration-300">
                            Book a Table
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-cream hover:text-coffee transition-colors p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} weight="light" /> : <List size={24} weight="light" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-4 right-4 bg-[#0A0A0A]/95 backdrop-blur-3xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:hidden z-50 overflow-hidden"
                    >
                        {/* Decorative background blob */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-coffee/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />

                        <div className="flex flex-col gap-6 relative z-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-display font-medium text-cream hover:text-coffee transition-colors tracking-wide border-b border-white/5 pb-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#reservation"
                                className="bg-gradient-to-r from-coffee to-coffee-dark text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest text-sm shadow-lg shadow-coffee/20"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book a Table
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
