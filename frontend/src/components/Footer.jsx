import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin,
  Shield,
  Award,
  Users
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-400">Tech</span>
              <span className="text-orange-400">Data</span>
              <span className="text-white ml-1">USA</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t('services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">{t('maintenanceRepair')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">{t('networkInstallation')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">{t('homeAutomation')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">{t('cyberSecurity')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">{t('softwareDevelopment')}</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">{t('webDesign')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">(407) 729-2141</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">techdatausa@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Winter Garden, Florida - USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Seg-Sex: 8h-18h | Sáb: 9h-17h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Início</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Serviços</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-blue-400 transition-colors">Agendamento</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contato</Link></li>
            </ul>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Shield size={16} className="text-green-400" />
                <span className="text-sm text-gray-300">Serviços Garantidos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-orange-400" />
                <span className="text-sm text-gray-300">Técnicos Certificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">Atendimento 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} TechData USA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;