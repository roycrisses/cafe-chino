import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from '@phosphor-icons/react';
import WaveSeparator from '../ui/WaveSeparator';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const galleryItems = [
    {
        id: 1,
        type: 'video',
        src: "/images/food and ambience images/ambience video 1.mp4",
        span: "md:col-span-2 md:row-span-2",
        alt: "Cafe Ambience"
    },
    {
        id: 2,
        type: 'image',
        src: "/images/food and ambience images/cappuccino.jpg",
        span: "md:col-span-1 md:row-span-1",
        alt: "Perfect Cappuccino"
    },
    {
        id: 3,
        type: 'image',
        src: "/images/food and ambience images/chicken momo.jpg",
        span: "md:col-span-1 md:row-span-1",
        alt: "Juicy Momos"
    },
    {
        id: 4,
        type: 'video',
        src: "/images/food and ambience images/ambience video 2.mp4",
        span: "md:col-span-1 md:row-span-2",
        alt: "Coffee Brewing"
    },
    {
        id: 5,
        type: 'image',
        src: "/images/food and ambience images/spicy loaded pizza.jpg",
        span: "md:col-span-2 md:row-span-1",
        alt: "Loaded Pizza"
    },
    {
        id: 6,
        type: 'image',
        src: "/images/food and ambience images/chicken chowmin.jpg",
        span: "md:col-span-1 md:row-span-1",
        alt: "Chowmin Delight"
    },
];

const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section id="gallery" className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <span className="text-coffee font-medium tracking-widest text-sm uppercase">Gallery</span>
                    <h2 className="text-4xl font-display font-bold mt-2">Moments at Chino</h2>
                    <p className="text-white/60 mt-4 max-w-xl mx-auto">
                        A glimpse into the vibes, the food, and the memories we create every day.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6"
                >
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            onClick={() => setSelectedItem(item)}
                            className={`relative group rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 ${item.span} cursor-pointer bg-white/5`}
                        >
                            {item.type === 'video' ? (
                                <>
                                    <video
                                        src={item.src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 group-hover:text-white group-hover:scale-125 transition-all duration-500 opacity-60 group-hover:opacity-100">
                                        <PlayCircle size={64} weight="thin" />
                                    </div>
                                    <div className="absolute bottom-6 left-6 text-white/80 font-display text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        {item.alt}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s]"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                                    <div className="absolute bottom-6 left-6 text-white/80 font-display text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        {item.alt}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden bg-background"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-coffee transition-colors z-10 bg-black/50 p-2 rounded-full"
                                onClick={() => setSelectedItem(null)}
                            >
                                <X size={24} weight="light" />
                            </button>

                            {selectedItem.type === 'video' ? (
                                <video
                                    src={selectedItem.src}
                                    autoPlay
                                    controls
                                    className="w-full h-full max-h-[80vh] object-contain"
                                />
                            ) : (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.alt}
                                    className="w-full h-full max-h-[80vh] object-contain"
                                />
                            )}
                            <div className="p-4 bg-background border-t border-white/5">
                                <h3 className="text-xl font-bold font-display">{selectedItem.alt}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Wave Transition to Contact (Secondary Color) */}
            <WaveSeparator position="bottom" color="text-secondary" />
        </section>
    );
};

export default Gallery;
