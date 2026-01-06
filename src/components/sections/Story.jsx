import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quotes } from '@phosphor-icons/react';
import WaveSeparator from '../ui/WaveSeparator';
import { fadeInUp } from '../../utils/animations';

const StoryCard = ({ name, role, quote, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay }}
            viewport={{ once: true }}
            className="relative group"
        >
            <div className="relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm p-8 h-full transition-colors duration-500 hover:bg-white/10 hover:border-coffee/30">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-coffee/20 group-hover:text-coffee/40 transition-colors duration-500">
                    <Quotes size={48} weight="fill" />
                </div>

                {/* Profile Image */}
                <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-coffee/50 p-1">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <p className="text-lg text-cream/80 italic mb-6 font-light leading-relaxed">
                        "{quote}"
                    </p>
                    <div>
                        <h4 className="text-xl font-display font-bold text-white tracking-wide">{name}</h4>
                        <span className="text-coffee text-sm uppercase tracking-widest font-medium">{role}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Story = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const stories = [
        {
            name: "The Founder",
            role: "Owner",
            quote: "I didn't just want to open a cafe; I wanted to create a living room for the community. A place where the noise of the world fades away, replaced by the aroma of fresh brew and genuine smiles.",
            image: "/images/food and ambience images/girl.jpg"
        },
        {
            name: "Roshni",
            role: "Head Barista",
            quote: "Coffee is an art, but service is a feeling. Seeing a customer's face light up when they take that first sip—that's the real magic we brew here every single day.",
            image: "/images/food and ambience images/girl taking pic.jpg"
        },
        {
            name: "Aarav",
            role: "Regular Customer",
            quote: "Cafe Chino isn't just a coffee shop to me anymore. It's where I wrote my first book, met my business partner, and found my peace in the chaos of the city.",
            image: "/images/food and ambience images/group selfie.jpg"
        }
    ];

    return (
        <section id="story" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0f0f0f]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                    backgroundSize: '200px'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-coffee font-medium tracking-[0.2em] uppercase text-sm block mb-4"
                    >
                        Community & Soul
                    </motion.span>
                    <motion.h2
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-6 uppercase"
                    >
                        Voices of <span className="text-transparent text-stroke">Chino</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-cream/60 text-lg font-light leading-relaxed"
                    >
                        We are more than bricks and beans. We are the sum of every laugh shared, every deadline met, and every quiet moment enjoyed within these walls.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8 relaitve">
                    {stories.map((story, index) => (
                        <StoryCard key={index} {...story} delay={index * 0.2} />
                    ))}
                </div>
            </div>

            {/* Wave Transition */}
            <WaveSeparator position="bottom" color="text-background" />
        </section>
    );
};

export default Story;
