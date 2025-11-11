import React from 'react';

const Footer = () => {
  return (
   <footer className="bg-neutral text-neutral-content px-8 py-10">
  <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
    
    {/* === Left Section === */}
    <div>
      <h2 className="text-xl font-semibold mb-3">EcoTrack</h2>
      <p className="text-sm leading-relaxed">
        Empowering eco-conscious communities to take meaningful action for a sustainable future.
      </p>
      <p className="text-xs mt-3 opacity-80">
        Accessibility-friendly | Privacy-first platform
      </p>
    </div>

    {/* === Middle Section (Quick Links) === */}
    <div>
      <h6 className="footer-title text-lg mb-3">Quick Links</h6>
      <nav className="flex flex-col gap-2">
        <a href="/about" className="link link-hover">About</a>
        <a href="/contact" className="link link-hover">Contact</a>
      </nav>
    </div>

    {/* === Right Section (Social Icons) === */}
    <div>
      <h6 className="footer-title text-lg mb-3">Follow Us</h6>
      <div className="flex gap-5">
        
        {/* X (Twitter) */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2h3.308l-7.227 8.26L22 22h-6.633l-5.2-6.815L4.155 22H.845l7.73-8.841L2 2h6.633l4.713 6.252L18.244 2zm-1.157 18h1.834L7.052 4h-1.9l11.935 16z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.267 4.356-2.631 4.385-8.816-.029-6.196-.488-8.55-4.385-8.816zM9 15.999V8l8 3.999-8 4z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.155 0-3.517.012-4.746.069-1.024.048-1.58.218-1.948.386-.49.213-.84.468-1.209.838-.37.369-.625.718-.838 1.208-.168.369-.338.924-.386 1.948-.057 1.229-.069 1.591-.069 4.746s.012 3.517.069 4.746c.048 1.024.218 1.58.386 1.948.213.49.468.84.838 1.209.369.37.718.625 1.208.838.369.168.924.338 1.948.386 1.229.057 1.591.069 4.746.069s3.517-.012 4.746-.069c1.024-.048 1.58-.218 1.948-.386.49-.213.84-.468 1.209-.838.37-.369.625-.718.838-1.208.168-.369.338-.924.386-1.948.057-1.229.069-1.591.069-4.746s-.012-3.517-.069-4.746c-.048-1.024-.218-1.58-.386-1.948a3.92 3.92 0 0 0-.838-1.209 3.92 3.92 0 0 0-1.209-.838c-.369-.168-.924-.338-1.948-.386-1.229-.057-1.591-.069-4.746-.069zm0 3.905a5.932 5.932 0 1 1 0 11.863 5.932 5.932 0 0 1 0-11.863zm0 9.8a3.868 3.868 0 1 0 0-7.736 3.868 3.868 0 0 0 0 7.736zm6.406-10.845a1.386 1.386 0 1 1-2.772 0 1.386 1.386 0 0 1 2.772 0z"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  {/* === Bottom Line === */}
  <div className="mt-10 border-t border-neutral-content/20 pt-4 text-center text-sm opacity-80">
    <p>© {new Date().getFullYear()} EcoTrack — All rights reserved.</p>
  </div>
</footer>

  );
};

export default Footer;