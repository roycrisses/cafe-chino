import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import WaveSeparator from '../ui/WaveSeparator';
import { fadeInUp } from '../../utils/animations';

const Reservation = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="reservation" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-coffee/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.span
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-coffee font-medium tracking-[0.2em] uppercase text-sm block mb-4"
                        >
                            Save Your Spot
                        </motion.span>
                        <motion.h2
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white mb-6"
                        >
                            BOOK A <span className="text-transparent text-stroke">TABLE</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-cream/60 text-lg font-light max-w-2xl mx-auto leading-relaxed"
                        >
                            Whether it's a coffee date or a family feast, we'll keep a seat warm for you. detailed form below.
                        </motion.p>
                    </div>

                    {/* Reservation Form Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden"
                    >
                        {formStatus === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6"
                                >
                                    <CheckCircle size={48} weight="fill" />
                                </motion.div>
                                <h3 className="text-3xl font-display font-bold text-white mb-2">Reservation Confirmed!</h3>
                                <p className="text-cream/60">We can't wait to see you.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Name */}
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-widest text-coffee mb-2 font-medium">Full Name</label>
                                        <div className="relative">
                                            <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-coffee transition-colors" />
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-cream placeholder:text-white/20 focus:outline-none focus:border-coffee/50 focus:ring-1 focus:ring-coffee/50 transition-all font-light"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-widest text-coffee mb-2 font-medium">Phone Number</label>
                                        <div className="relative">
                                            <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-coffee transition-colors" />
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-cream placeholder:text-white/20 focus:outline-none focus:border-coffee/50 focus:ring-1 focus:ring-coffee/50 transition-all font-light"
                                                placeholder="+977 9800000000"
                                            />
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-widest text-coffee mb-2 font-medium">Date</label>
                                        <div className="relative">
                                            <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-coffee transition-colors" />
                                            <input
                                                type="date"
                                                required
                                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-cream placeholder:text-white/20 focus:outline-none focus:border-coffee/50 focus:ring-1 focus:ring-coffee/50 transition-all font-light opacity-90"
                                            />
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="group">
                                        <label className="block text-xs uppercase tracking-widest text-coffee mb-2 font-medium">Time</label>
                                        <div className="relative">
                                            <Clock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-coffee transition-colors" />
                                            <select className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-cream focus:outline-none focus:border-coffee/50 focus:ring-1 focus:ring-coffee/50 transition-all font-light appearance-none cursor-pointer">
                                                <option>10:00 AM</option>
                                                <option>12:00 PM</option>
                                                <option>02:00 PM</option>
                                                <option>04:00 PM</option>
                                                <option>06:00 PM</option>
                                                <option>08:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Guests */}
                                    <div className="group md:col-span-2">
                                        <label className="block text-xs uppercase tracking-widest text-coffee mb-2 font-medium">Guests</label>
                                        <div className="relative">
                                            <Users size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-coffee transition-colors" />
                                            <select className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-cream focus:outline-none focus:border-coffee/50 focus:ring-1 focus:ring-coffee/50 transition-all font-light appearance-none cursor-pointer">
                                                <option>2 People</option>
                                                <option>3 People</option>
                                                <option>4 People</option>
                                                <option>5 People</option>
                                                <option>6+ People</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className="w-full py-5 !text-lg !rounded-xl mt-4"
                                    disabled={formStatus === 'submitting'}
                                >
                                    {formStatus === 'submitting' ? 'Confirming...' : 'Confirm Reservation'}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Wave Transition */}
            <WaveSeparator position="bottom" color="text-secondary" />
        </section>
    );
};

export default Reservation;
