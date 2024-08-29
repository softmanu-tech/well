import React, { useState, useEffect } from 'react';
import { FaHome, FaShoppingBag, FaBriefcase, FaCommentAlt, FaDollarSign, FaBars, FaTimes, FaUsers } from 'react-icons/fa';

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
    { name: 'Home', icon: <FaHome size={20} /> },
    { name: 'Shop', icon: <FaShoppingBag size={20} /> },
    { name: 'Services', icon: <FaBriefcase size={20} /> },
    { name: 'Career', icon: <FaUsers size={20} /> },
    { name: 'Testimonials', icon: <FaCommentAlt size={20} /> },
    { name: 'Pricing', icon: <FaDollarSign size={20} /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen ? 'bg-slate-300' : isSticky ? 'bg-white/70' : 'bg-transparent'
      } backdrop-blur-md`}
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
                  href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleNavClick(e, item.name.toLowerCase().replace(' ', '-'))}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 ${
                    isSticky
                      ? 'hover:bg-white/40'
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
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                isSticky ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-slate-200 bg-opacity-75 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
          <div className="relative h-full w-64 max-w-sm bg-white shadow-xl flex flex-col justify-start pt-20 px-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                onClick={(e) => handleNavClick(e, item.name.toLowerCase().replace(' ', '-'))}
                className="hover:bg-white/40 px-3 py-2 rounded-md text-base font-medium flex items-center mb-2 transform hover:scale-105 transition-all duration-300"
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
      )}
    </nav>
  );
};

export default Navbar;