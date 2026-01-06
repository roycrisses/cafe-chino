import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from '../ui/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-secondary relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8"
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="text-coffee font-medium tracking-widest text-sm uppercase">Get in Touch</span>
                            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-2">Visit Us Today</h2>
                            <p className="text-white/70 mt-4 leading-relaxed text-lg">
                                We are located in the heart of Mahendranagar. Drop by for a cup of coffee or a hearty meal.
                            </p>
                        </motion.div>

                        <motion.div variants={staggerContainer} className="space-y-8">
                            <motion.div variants={fadeInUp} className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-secondary border border-white/5 rounded-2xl flex items-center justify-center text-coffee shrink-0 group-hover:border-coffee/50 group-hover:bg-coffee/10 transition-all duration-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-xl mb-1 group-hover:text-coffee transition-colors">Location</h5>
                                    <p className="text-white/60 group-hover:text-white/80 transition-colors">Mahendranagar (Bhimdatta), Kanchanpur</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-secondary border border-white/5 rounded-2xl flex items-center justify-center text-coffee shrink-0 group-hover:border-coffee/50 group-hover:bg-coffee/10 transition-all duration-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-xl mb-1 group-hover:text-coffee transition-colors">Phone</h5>
                                    <p className="text-white/60 group-hover:text-white/80 transition-colors">+977-9800000000</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-secondary border border-white/5 rounded-2xl flex items-center justify-center text-coffee shrink-0 group-hover:border-coffee/50 group-hover:bg-coffee/10 transition-all duration-500">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-xl mb-1 group-hover:text-coffee transition-colors">Opening Hours</h5>
                                    <p className="text-white/60 group-hover:text-white/80 transition-colors">Sunday - Friday: 8:00 AM - 9:00 PM</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="pt-4">
                            <Button variant="primary" className="group hover:shadow-[0_0_30px_rgba(198,156,109,0.4)]">
                                <span className="relative z-10">Get Directions</span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl group hover:border-coffee/30 transition-all duration-700 hover:shadow-[0_0_40px_rgba(198,156,109,0.2)]"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14068.756284242636!2d80.17982804557658!3d28.974699527070513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU4JzI4LjkiTiA4MMKwMTAnNDcuNCJF!5e0!3m2!1sen!2snp!4v1634567890123!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-100"
                            title="Cafe Chino Location"
                        >
                        </iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
