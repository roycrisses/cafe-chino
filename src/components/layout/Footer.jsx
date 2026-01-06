import React from 'react';
import { Coffee, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="flex items-center gap-2 text-3xl font-display font-bold text-cream mb-6">
                            <Coffee className="w-8 h-8 text-coffee" />
                            <span>Cafe Chino<span className="text-coffee">.</span></span>
                        </a>
                        <p className="text-white/60 max-w-sm leading-relaxed mb-8">
                            Brewing happiness and serving memories in the heart of Mahendranagar. Experience the perfect blend of taste and ambiance.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-coffee hover:text-white transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-coffee hover:text-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            {/* Add TikTok icon if custom SVG available or use generic for now */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-white/60 hover:text-coffee transition-colors">Home</a></li>
                            <li><a href="#about" className="text-white/60 hover:text-coffee transition-colors">About Us</a></li>
                            <li><a href="#menu" className="text-white/60 hover:text-coffee transition-colors">Menu</a></li>
                            <li><a href="#gallery" className="text-white/60 hover:text-coffee transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-white/60">
                            <li>Mahendranagar (Bhimdatta), Kanchanpur</li>
                            <li>+977-9800000000</li>
                            <li>info@cafechino.com</li>
                            <li>Sun - Fri: 8am - 9pm</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 text-center text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Cafe Chino. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
