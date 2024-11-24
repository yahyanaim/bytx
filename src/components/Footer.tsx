import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Code2 className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-2xl font-bold text-white">Bytx</span>
            </div>
            <p className="text-gray-400">
              Creating exceptional digital experiences through innovative web development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">Web Design</a></li>
              <li><a href="#" className="hover:text-indigo-400">Development</a></li>
              <li><a href="#" className="hover:text-indigo-400">E-commerce</a></li>
              <li><a href="#" className="hover:text-indigo-400">Maintenance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Our Work</a></li>
              <li><a href="#" className="hover:text-indigo-400">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:hello@bytx.com" className="hover:text-indigo-400">hello@bytx.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+212 06 25 88 93" className="hover:text-indigo-400">+212 06 25 88 93 97</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-indigo-400" />
                <span>Marakkech-Safi, Safi</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Bytx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;