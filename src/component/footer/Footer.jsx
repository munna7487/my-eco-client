import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section - Links & Social */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Quick Links */}
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Quick Links</h6>
            <a href="/about" className="link link-hover text-gray-300 hover:text-white block mb-2">About</a>
            <a href="/contact" className="link link-hover text-gray-300 hover:text-white block mb-2">Contact</a>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Legal</h6>
            <a href="/terms" className="link link-hover text-gray-300 hover:text-white block mb-2">Terms of use</a>
            <a href="/privacy" className="link link-hover text-gray-300 hover:text-white block mb-2">Privacy policy</a>
            <a href="/cookie" className="link link-hover text-gray-300 hover:text-white block mb-2">Cookie policy</a>
          </nav>

          {/* Social Media */}
          <nav>
            <h6 className="footer-title text-lg font-bold mb-4">Follow Us</h6>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/munna7487"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 5.433 3.436 7 1.5 7S-2 5.433-2 3.5 0.436 0 2.5 0s2.48 1.567 2.48 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.5 6.4 8V24h-5v-7.6c0-1.8 0-4-2.5-4-2.5 0-2.9 2-2.9 3.9V24h-5V8z" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com/munna7487"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.944 13.944 0 011.671 3.149a4.916 4.916 0 001.523 6.574 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.104c-.395 0-.786-.023-1.17-.069a13.945 13.945 0 007.557 2.212c9.054 0 14.001-7.496 14.001-13.986 0-.21-.005-.423-.014-.634A9.936 9.936 0 0024 4.557z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Bottom Section - Copyright + Accessibility Note */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-3">
          <p>© 2025 EcoTrack - All rights reserved</p>
          <p className="text-xs text-center sm:text-right">
            Committed to <a href="/accessibility" className="underline hover:text-white">accessibility</a> and 
            your <a href="/privacy" className="underline hover:text-white">privacy</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;