import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@phosphor-icons/react';
import Button from '../ui/Button';
import WaveSeparator from '../ui/WaveSeparator';
import { fadeInUp, slideInLeft, scaleIn, float } from '../../utils/animations';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center bg-[#0a0a0a]">
            {/* GIANT BACKDROP TEXT */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none pointer-events-none overflow-hidden">
                <motion.h1
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-[15vw] leading-none font-display font-black text-white/[0.03] whitespace-nowrap"
                >
                    CAFE CHINO
                </motion.h1>
            </div>

            {/* Organic Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-coffee/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coffee-dark/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            {/* Decorative Splash Pattern - Full Screen */}
            <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay"
                style={{
                    backgroundImage: 'url("/images/food and ambience images/coffee-splash-bg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">

                    {/* Text Content - Spans 7 cols */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={slideInLeft}
                        className="lg:col-span-7 relative z-10 text-center lg:text-left pt-10 lg:pt-0"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-coffee animate-pulse" />
                            <span className="text-coffee font-medium tracking-widest uppercase text-[10px]">Since 2024</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] mb-8 tracking-tighter">
                            <span className="text-transparent text-stroke block hover:text-white/10 transition-colors duration-500">HOMEMADE</span>
                            <span className="text-white block">COFFEE</span>
                            <span className="text-gradient-gold text-4xl sm:text-6xl md:text-7xl lg:text-8xl italic font-serif block mt-2">& Good Vibes.</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-cream/60 text-base sm:text-lg mb-10 max-w-lg leading-relaxed font-light mx-auto lg:mx-0 lg:border-l lg:border-white/10 lg:pl-6 border-none pl-0">
                            Escape the noise. Step into a world where every cup tells a story and every corner feels like home.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <Button variant="primary" className="!rounded-none !px-8 sm:!px-10 !py-4 transition-transform hover:-translate-y-1 w-full sm:w-auto">
                                Taste the Magic
                            </Button>
                            <Button
                                variant="outline"
                                className="!rounded-none !px-8 sm:!px-10 !py-4 transition-transform hover:-translate-y-1 w-full sm:w-auto border-white/20 hover:bg-white hover:text-black"
                                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Read Our Story
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Image Content - Spans 5 cols */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0 pb-10 lg:pb-0">
                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={scaleIn}
                            className="relative z-10"
                        >
                            {/* Asymmetrical Image Composition */}
                            <div className="relative z-10 px-4 sm:px-0">
                                <motion.div variants={float} animate="animate">
                                    <img
                                        src="/images/food and ambience images/cappuccino.jpg"
                                        alt="Signature Cappuccino"
                                        className="w-full max-w-sm lg:max-w-md mx-auto object-cover rounded-[2rem] shadow-2xl skew-y-2 hover:skew-y-0 transition-all duration-700 grayscale-[20%] hover:grayscale-0"
                                    />
                                </motion.div>

                                {/* Floating Sticker Elements */}
                                <motion.div
                                    animate={{ rotate: [0, 10, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-2 sm:-top-12 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 bg-coffee rounded-full flex flex-col items-center justify-center text-black font-black text-[10px] sm:text-xs uppercase tracking-tighter shadow-lg z-20 border-4 border-black/50"
                                >
                                    <div className="flex mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} weight="fill" className="text-black" />
                                        ))}
                                    </div>
                                    <div className="text-center rotate-12 leading-none">
                                        Best<br />Seller
                                    </div>
                                </motion.div>
                            </div>

                            {/* Abstract Shapes behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0 animate-[spin_20s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full z-0 animate-[spin_15s_linear_infinite_reverse]" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Wave Transition */}
            <WaveSeparator position="bottom" color="text-secondary" />
        </section>
    );
};

export default Hero;
