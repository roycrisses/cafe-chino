import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Coffee, Users, Award, Clock } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="text-5xl md:text-6xl font-display font-black text-coffee">
            {count}{suffix}
        </span>
    );
};

const StatCard = ({ icon: Icon, value, suffix, label, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
            className="text-center group"
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-coffee/10 text-coffee group-hover:bg-coffee group-hover:text-white transition-all duration-300"
            >
                <Icon size={32} />
            </motion.div>
            <div className="mb-2">
                <AnimatedCounter end={value} suffix={suffix} />
            </div>
            <p className="text-cream/60 text-sm uppercase tracking-widest">{label}</p>
        </motion.div>
    );
};

const Stats = () => {
    const stats = [
        { icon: Coffee, value: 50000, suffix: '+', label: 'Cups Served' },
        { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers' },
        { icon: Award, value: 15, suffix: '+', label: 'Awards Won' },
        { icon: Clock, value: 5, suffix: '', label: 'Years Experience' },
    ];

    return (
        <section className="py-20 bg-secondary relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-coffee/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-coffee font-medium tracking-[0.2em] uppercase text-sm block mb-2">Our Journey</span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-white">
                        By The <span className="text-transparent text-stroke">Numbers</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} delay={index * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
