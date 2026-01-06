import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaveSeparator from '../ui/WaveSeparator';
import { staggerContainer, fadeInUp } from '../../utils/animations';

const menuItems = [
    { id: 1, name: "Cappuccino", price: "Rs. 180", category: "coffee", image: "/images/food and ambience images/cappuccino.jpg", desc: "Rich espresso with steamed milk foam." },
    { id: 2, name: "Mix Pizza", price: "Rs. 450", category: "pizza", image: "/images/food and ambience images/mix pizza.jpg", desc: "Loaded with fresh veggies and cheese." },
    { id: 3, name: "Chicken Momo", price: "Rs. 180", category: "momo", image: "/images/food and ambience images/chicken momo.jpg", desc: "Juicy minced chicken in thin dough." },
    { id: 4, name: "Chilly Momo", price: "Rs. 220", category: "momo", image: "/images/food and ambience images/steam chilly momo.jpg", desc: "Spicy fried momos in chili sauce." },
    { id: 5, name: "Classic Burger", price: "Rs. 250", category: "snacks", image: "/images/food and ambience images/burgres.jpg", desc: "Grilled patty with fresh lettuce." },
    { id: 6, name: "Mushroom Pizza", price: "Rs. 390", category: "pizza", image: "/images/food and ambience images/mushroom pizza.jpg", desc: "Fresh locally sourced mushrooms." },
    { id: 7, name: "Cold Coffee", price: "Rs. 200", category: "coffee", image: "/images/food and ambience images/cream coffee.jpg", desc: "Chilled brewed coffee with ice cream." }, // Placeholder image
    { id: 8, name: "Drums of Heaven", price: "Rs. 320", category: "snacks", image: "/images/food and ambience images/drums of heaven.jpg", desc: "Crispy wings in schezwan sauce." },
];

const categories = [
    { id: 'all', label: 'All' },
    { id: 'coffee', label: 'Coffee' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'momo', label: 'Momo' },
    { id: 'snacks', label: 'Snacks' },
];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-20 bg-secondary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <span className="text-coffee font-medium tracking-widest text-sm uppercase">Our Menu</span>
                    <h2 className="text-4xl font-display font-bold mt-2">Special Delights</h2>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-coffee border-coffee text-white'
                                : 'border-white/10 text-white/60 hover:border-coffee/50 hover:text-white'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div
                    layout
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='wait'>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                variants={fadeInUp}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                                key={item.id}
                                className="glass-card rounded-2xl overflow-hidden hover:border-coffee/40 group cursor-pointer transition-all duration-500"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-4 py-1.5 rounded-full text-sm z-20 shadow-lg">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-bold font-display group-hover:text-coffee transition-colors">{item.name}</h4>
                                    </div>
                                    <p className="text-cream/60 text-sm leading-relaxed font-light line-clamp-2">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center mt-12">
                    <button className="text-coffee hover:text-cream underline underline-offset-4 transition-colors">
                        View Full Menu PDF
                    </button>
                </div>
            </div>
            {/* Wave Transition */}
            <WaveSeparator position="bottom" color="text-background" />
        </section>
    );
};

export default Menu;
