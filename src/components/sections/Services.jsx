import React from 'react';
import { Coffee, WifiHigh, Users, Plant } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import WaveSeparator from '../ui/WaveSeparator';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const services = [
    {
        icon: <Coffee size={32} weight="light" />,
        title: "Premium Coffee",
        description: "Expertly brewed from the finest beans for that perfect wake-up call."
    },
    {
        icon: <Users size={32} weight="light" />,
        title: "Community Vibe",
        description: "A place where locals, students, and travelers connect."
    },
    {
        icon: <WifiHigh size={32} weight="light" />,
        title: "Free Wi-Fi",
        description: "Stay connected while you sip. Perfect for digital nomads."
    },
    {
        icon: <Plant size={32} weight="light" />,
        title: "Fresh Ingredients",
        description: "We source locally to ensure the freshest taste in every bite."
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16 max-w-2xl mx-auto"
                >
                    <span className="text-coffee font-medium tracking-widest text-sm uppercase block mb-2">Why Choose Us</span>
                    <h2 className="text-4xl font-display font-bold mb-4">Experience the Best</h2>
                    <div className="w-24 h-1 bg-coffee mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="glass-card p-8 rounded-[2rem] hover:border-coffee/40 transition-all duration-700 group relative overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(198,156,109,0.3)]"
                        >
                            {/* Gradient Border Effect */}
                            <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-coffee/20 via-transparent to-coffee-dark/20 pointer-events-none" />

                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                                {React.cloneElement(service.icon, { size: 60 })}
                            </div>
                            <motion.div
                                className="w-14 h-14 bg-coffee/10 text-coffee rounded-xl flex items-center justify-center mb-6 group-hover:bg-coffee group-hover:text-white transition-all duration-500 relative z-10"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {service.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-coffee transition-colors duration-500">{service.title}</h3>
                            <p className="text-cream/60 text-sm leading-relaxed relative z-10 group-hover:text-cream/80 transition-colors duration-500">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            {/* Wave Transition */}
            <WaveSeparator position="bottom" color="text-secondary" />
        </section>
    );
};

export default Services;
