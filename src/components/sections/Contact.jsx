import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-secondary relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-coffee font-medium tracking-widest text-sm uppercase">Get in Touch</span>
                            <h2 className="text-4xl lg:text-5xl font-display font-bold mt-2">Visit Us Today</h2>
                            <p className="text-white/60 mt-4 leading-relaxed text-lg">
                                We are located in the heart of Mahendranagar. Drop by for a cup of coffee or a hearty meal.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-secondary border border-white/5 rounded-2xl flex items-center justify-center text-coffee shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-xl mb-1">Location</h5>
                                    <p className="text-white/60">Mahendranagar (Bhimdatta), Kanchanpur</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-secondary border border-white/5 rounded-2xl flex items-center justify-center text-coffee shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-xl mb-1">Phone</h5>
                                    <p className="text-white/60">+977-9800000000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-secondary border border-white/5 rounded-2xl flex items-center justify-center text-coffee shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-xl mb-1">Opening Hours</h5>
                                    <p className="text-white/60">Sunday - Friday: 8:00 AM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button variant="primary">Get Directions</Button>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14068.756284242636!2d80.17982804557658!3d28.974699527070513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU4JzI4LjkiTiA4MMKwMTAnNDcuNCJF!5e0!3m2!1sen!2snp!4v1634567890123!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        >
                        </iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
