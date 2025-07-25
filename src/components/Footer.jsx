import { Link } from "react-router-dom"; 
import { Instagram, Youtube, Twitter, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
     
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="text-white">KOMAL</span>
                <span className=""> PANDEY</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Fashion that empowers. Built for the unapologetic. Where style becomes storytelling.
            </p>
            <div className="flex space-x-2">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram" 
                className="inline-flex items-center justify-center h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our YouTube"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@komalpandey.com" 
                aria-label="Email us"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>


          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wider">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Products & Services
              </Link>
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                About Komal
              </Link>
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Style Inspiration
              </Link>
              <Link to="/login" className="block text-gray-400 hover:text-white transition-colors">
                Sign In
              </Link>
            </div>
          </div>


          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wider">Services</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Closet Therapy
              </Link>
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Power Dressing 101
              </Link>
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Bold is Beautiful
              </Link>
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                View All Services
              </Link>
            </div>
          </div>

    
          <div>
            <h3 className="font-bold text-lg mb-4 tracking-wider">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest styling tips and exclusive content.</p>
            <form className="space-y-3">
               <label htmlFor="email-newsletter" className="sr-only">Email address</label>
               <input
                id="email-newsletter"
                type="email"
                placeholder="Your email address"
                className="block w-full rounded-md border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder:text-gray-500 focus:border-rose-500 focus:ring-rose-500"
              />
              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Komal Pandey. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}