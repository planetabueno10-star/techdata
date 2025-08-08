import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Agendamento', path: '/booking' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>(407) 729-2141</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>techdatausa@hotmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Winter Garden, Florida - USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-blue-600">Tech</span>
              <span className="text-orange-500">Data</span>
              <span className="text-gray-700 ml-2 text-xl">USA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Orçamento Grátis
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                Orçamento Grátis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;