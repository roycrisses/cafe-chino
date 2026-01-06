import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import WaveSeparator from '../ui/WaveSeparator';
import { slideInLeft, slideInRight, fadeInUp } from '../../utils/animations';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-secondary">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-coffee/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Image Side - Scrapbook Style */}
                    <div className="relative lg:order-2 mb-10 lg:mb-0">
                        <motion.div
                            initial={{ rotate: -5, opacity: 0, y: 30 }}
                            whileInView={{ rotate: -3, opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            whileHover={{ rotate: 0, scale: 1.02 }}
                            className="relative z-10 px-4 sm:px-0"
                        >
                            <img
                                src="/images/food and ambience images/cream coffee.jpg"
                                alt="Cafe Interior"
                                loading="lazy"
                                className="w-full h-auto max-w-sm sm:max-w-md mx-auto lg:ml-auto object-cover rounded-none shadow-[10px_10px_0px_0px_rgba(255,255,255,0.05)] sm:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.05)] border-4 border-white/10 transition-all duration-700"
                            />
                        </motion.div>

                        {/* Secondary Image Overlapping */}
                        <motion.div
                            initial={{ x: -20, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-10 w-32 h-32 sm:w-48 sm:h-48 hidden sm:block z-20"
                        >
                            <img
                                src="/images/food and ambience images/mix pizza.jpg"
                                loading="lazy"
                                className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                                alt="Detail"
                            />
                        </motion.div>
                    </div>

                    {/* Text Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={slideInLeft}
                        className="space-y-6 lg:order-1 text-center lg:text-left"
                    >
                        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black leading-[0.9] text-white">
                            NOT JUST <br />
                            <span className="text-stroke text-transparent italic lg:pr-4">ANOTHER</span> <br />
                            COFFEE SHOP.
                        </h2>

                        <div className="relative lg:pl-8 lg:border-l-2 lg:border-coffee/30 border-none pl-0">
                            <p className="text-cream/70 text-base sm:text-lg leading-relaxed mb-6 font-light">
                                We are the rebels of the morning routine. Located in Mahendranagar, we brew bold stories and serve experiences that linger longer than the caffeine kick.
                            </p>
                            <p className="text-cream/50 leading-relaxed font-light text-sm sm:text-base">
                                Whether you're chasing deadlines or daydreams, we've got the space (and the snacks) for you.
                            </p>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-4 items-center pt-4">
                            <Button
                                variant="outline"
                                className="!rounded-none border-white/20 hover:bg-white hover:text-black"
                                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Read Our Story
                            </Button>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Wave Transition */}
            <WaveSeparator position="bottom" color="text-background" />
        </section>
    );
};

export default About;
