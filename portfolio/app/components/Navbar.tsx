import React, { useState, useEffect } from 'react';
import link from 'next/link'
import { FaHome, FaShoppingBag, FaBriefcase, FaCommentAlt, FaTrophy,FaGift, FaBars, FaTimes, FaUsers,FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', icon: <FaHome size={20} />, href: '/' },
    { name: 'About', icon: <FaInfoCircle size={20} /> , href: '/#about'},
    
    { name: 'Services', icon: <FaBriefcase size={20} />, href:'/#services' },
    { name: 'Shop', icon: <FaShoppingBag size={20} /> , href:'/shop'},
    { name: 'Careers', icon: <FaUsers size={20} />, href:'/#careers' },
    { name: 'Testimonials', icon: <FaCommentAlt size={20} />, href:'/#testimonials' },
    
    
    { name: 'Loyalty Program', icon: <FaGift size={20} />, href:'/loyalty-program' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    
    if (href.startsWith('/#')){
      const targetId =href.substring(2);
      const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    }    
    
    
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isOpen ? 'bg-white' : isSticky ? 'bg-/70' : 'bg-transparent'
        } transparent-md`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0">
                <img className="h-8 w-8 rounded-lg bg-transparent" src="/l1.png" alt="Logo" />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={`${item.href.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, item.href.toLowerCase().replace(' ', '-'))}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${
                      isSticky || isOpen
                        ? 'hover:bg-gray-100'
                        : 'hover:bg-white/10'
                    } transform hover:scale-105 hover:shadow-lg`}
                    style={{
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                  >
                    <span className="text-black">{item.icon}</span>
                    <span className="ml-2 text-purple">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black ${
                  isSticky || isOpen ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-purple hover:bg-white/10'
                }`}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative top-6 w-64 max-w-sm bg-white shadow-xl flex flex-col justify-start pt-20 px-4 transition-transform duration-300 ease-in-out transform translate-x-0">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={`${item.href.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.href.toLowerCase().replace(' ', '-'))}
                className="hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center mb-2 transform hover:scale-105 transition-all duration-300"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              >
                <span className="text-black">{item.icon}</span>
                <span className="ml-2 text-purple">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;