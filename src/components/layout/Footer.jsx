import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Facebook, Instagram } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-coffee/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-4 gap-12 mb-16"
                >

                    {/* Brand */}
                    <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
                        <a href="#home" className="flex items-center gap-2 text-3xl font-display font-bold text-cream mb-6 group">
                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                <Coffee className="w-8 h-8 text-coffee" />
                            </motion.div>
                            <span className="group-hover:text-coffee transition-colors">Cafe Chino<span className="text-coffee">.</span></span>
                        </a>
                        <p className="text-white/70 max-w-sm leading-relaxed mb-8">
                            Brewing happiness and serving memories in the heart of Mahendranagar. Experience the perfect blend of taste and ambiance.
                        </p>
                        <div className="flex gap-4">
                            <motion.a
                                href="#"
                                whileHover={{ y: -4, scale: 1.1, backgroundColor: "rgba(198, 156, 109, 1)" }}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300"
                            >
                                <Facebook size={18} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -4, scale: 1.1, backgroundColor: "rgba(198, 156, 109, 1)" }}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all duration-300"
                            >
                                <Instagram size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-bold mb-6 text-coffee">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-white/60 hover:text-coffee hover:translate-x-1 inline-block transition-all">Home</a></li>
                            <li><a href="#about" className="text-white/60 hover:text-coffee hover:translate-x-1 inline-block transition-all">About Us</a></li>
                            <li><a href="#menu" className="text-white/60 hover:text-coffee hover:translate-x-1 inline-block transition-all">Menu</a></li>
                            <li><a href="#gallery" className="text-white/60 hover:text-coffee hover:translate-x-1 inline-block transition-all">Gallery</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-bold mb-6 text-coffee">Contact</h4>
                        <ul className="space-y-4 text-white/70">
                            <li className="hover:text-coffee transition-colors cursor-default">Mahendranagar (Bhimdatta), Kanchanpur</li>
                            <li className="hover:text-coffee transition-colors cursor-default">+977-9800000000</li>
                            <li className="hover:text-coffee transition-colors cursor-default">info@cafechino.com</li>
                            <li className="hover:text-coffee transition-colors cursor-default">Sun - Fri: 8am - 9pm</li>
                        </ul>
                    </motion.div>

                </motion.div>

                <div className="border-t border-white/5 pt-8 text-center text-white/50 text-sm">
                    <p>&copy; {new Date().getFullYear()} Cafe Chino. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
