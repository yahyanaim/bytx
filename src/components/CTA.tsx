import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://png.pngtree.com/background/20230617/original/pngtree-abstract-technology-and-communication-background-a-3d-rendering-of-interconnected-lines-picture-image_3703982.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-indigo-600 opacity-55"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your Project?</h2>
      <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
      Let's create something amazing together. Start your journey with Bytx today.
      </p>
      <button className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
      Get Started Now
      <ArrowRight className="ml-2 h-5 w-5" />
      </button>
      </div>
    </section>
  );
};

export default CTA;