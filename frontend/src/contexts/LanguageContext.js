import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('techdata-language');
    if (savedLanguage && ['pt', 'es', 'en'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('techdata-language', language);
  };

  const translations = {
    pt: {
      // Navigation
      home: 'Início',
      services: 'Serviços',
      booking: 'Agendamento',
      contact: 'Contato',
      freeQuote: 'Orçamento Grátis',
      
      // Hero Section
      heroTitle: 'Soluções Tecnológicas',
      heroTitleHighlight: 'Completas',
      heroSubtitle: 'Da manutenção de computadores à cibersegurança empresarial. Transformamos desafios tecnológicos em soluções eficientes.',
      heroAdvanced: 'Tecnologia Avançada em Florida',
      scheduleService: 'Agendar Serviço',
      
      // Benefits
      freeEstimate: 'Orçamento sem custo',
      freePickupDelivery: 'Busca e entrega gratuita',
      support24_7: 'Atendimento 24/7',
      guaranteedServices: 'Garantia em todos os serviços',
      certifiedTechnicians: 'Técnicos certificados',
      afterSalesSupport: 'Suporte pós-venda',
      
      // Services
      ourServices: 'Nossos Serviços',
      professionalSolutions: 'Soluções Tecnológicas Profissionais',
      servicesDescription: 'Oferecemos um portfólio completo de serviços tecnológicos para residências e empresas em Winter Garden, Florida.',
      viewAllServices: 'Ver Todos os Serviços',
      
      // Service Categories
      maintenanceRepair: 'Manutenção e Reparação',
      maintenanceDesc: 'Computadores e notebooks com diagnóstico completo e reparo profissional',
      networkInstallation: 'Instalação de Redes',
      networkDesc: 'Configuração de redes residenciais e empresariais com alta performance',
      homeAutomation: 'Automação Doméstica',
      homeAutomationDesc: 'Transforme sua casa em um ambiente inteligente e conectado',
      cyberSecurity: 'Cyber Security',
      cyberSecurityDesc: 'Proteção completa contra ameaças digitais para casa e empresa',
      softwareDevelopment: 'Desenvolvimento de Software',
      softwareDesc: 'Soluções personalizadas para suas necessidades específicas',
      webDesign: 'Design e Sites',
      webDesignDesc: 'Criação de sites profissionais e identidade visual moderna',
      
      // Features
      freeDiagnosis: 'Diagnóstico gratuito',
      repair48h: 'Reparo em até 48h',
      warranty90days: 'Garantia de 90 dias',
      professionalWifi: 'Wi-Fi profissional',
      structuredCabling: 'Cabeamento estruturado',
      advancedConfig: 'Configuração avançada',
      smartHome: 'Casa inteligente',
      remoteControl: 'Controle remoto',
      fullIntegration: 'Integração completa',
      professionalAntivirus: 'Antivírus profissional',
      advancedFirewall: 'Firewall avançado',
      monitoring24_7: 'Monitoramento 24/7',
      customSoftware: 'Software sob medida',
      webApps: 'Aplicações web',
      integratedSystems: 'Sistemas integrados',
      responsiveDesign: 'Design responsivo',
      seoOptimized: 'SEO otimizado',
      fullEcommerce: 'E-commerce completo',
      
      // CTA Section
      readyToModernize: 'Pronto para Modernizar sua',
      technology: 'Tecnologia',
      ctaDescription: 'Entre em contato hoje mesmo e descubra como podemos transformar sua experiência tecnológica.',
      scheduleConsultation: 'Agendar Consulta',
      contactUs: 'Falar Conosco',
      
      // Footer
      footerDescription: 'Soluções tecnológicas completas para residências e empresas em Winter Garden, Florida. Transformamos desafios em oportunidades digitais.',
      quickLinks: 'Links Rápidos',
      guaranteedServicesFooter: 'Serviços Garantidos',
      
      // Contact
      phone: 'Telefone',
      email: 'E-mail',
      address: 'Endereço',
      businessHours: 'Horário de Funcionamento',
      
      // Booking
      bookingTitle: 'Agendar Serviço',
      bookingDescription: 'Agende seu serviço de forma rápida e conveniente. Nossa equipe entrará em contato para confirmar.',
      selectService: 'Selecione o Serviço',
      preferredDate: 'Data Preferida',
      preferredTime: 'Horário Preferido',
      fullName: 'Nome Completo',
      phoneNumber: 'Número de Telefone',
      emailAddress: 'Endereço de E-mail',
      additionalMessage: 'Mensagem Adicional (Opcional)',
      sendRequest: 'Enviar Solicitação',
      
      // Common
      loading: 'Carregando...',
      submit: 'Enviar',
      cancel: 'Cancelar',
      close: 'Fechar'
    },
    
    es: {
      // Navigation
      home: 'Inicio',
      services: 'Servicios',
      booking: 'Agendar Cita',
      contact: 'Contacto',
      freeQuote: 'Presupuesto Gratis',
      
      // Hero Section
      heroTitle: 'Soluciones Tecnológicas',
      heroTitleHighlight: 'Completas',
      heroSubtitle: 'Desde mantenimiento de computadoras hasta ciberseguridad empresarial. Transformamos desafíos tecnológicos en soluciones eficientes.',
      heroAdvanced: 'Tecnología Avanzada en Florida',
      scheduleService: 'Agendar Servicio',
      
      // Benefits
      freeEstimate: 'Presupuesto sin costo',
      freePickupDelivery: 'Recolección y entrega gratuita',
      support24_7: 'Atención 24/7',
      guaranteedServices: 'Garantía en todos los servicios',
      certifiedTechnicians: 'Técnicos certificados',
      afterSalesSupport: 'Soporte post-venta',
      
      // Services
      ourServices: 'Nuestros Servicios',
      professionalSolutions: 'Soluciones Tecnológicas Profesionales',
      servicesDescription: 'Ofrecemos un portafolio completo de servicios tecnológicos para hogares y empresas en Winter Garden, Florida.',
      viewAllServices: 'Ver Todos los Servicios',
      
      // Service Categories
      maintenanceRepair: 'Mantenimiento y Reparación',
      maintenanceDesc: 'Computadoras y laptops con diagnóstico completo y reparación profesional',
      networkInstallation: 'Instalación de Redes',
      networkDesc: 'Configuración de redes residenciales y empresariales con alto rendimiento',
      homeAutomation: 'Automatización del Hogar',
      homeAutomationDesc: 'Transforma tu casa en un ambiente inteligente y conectado',
      cyberSecurity: 'Ciberseguridad',
      cyberSecurityDesc: 'Protección completa contra amenazas digitales para hogar y empresa',
      softwareDevelopment: 'Desarrollo de Software',
      softwareDesc: 'Soluciones personalizadas para tus necesidades específicas',
      webDesign: 'Diseño y Sitios Web',
      webDesignDesc: 'Creación de sitios web profesionales e identidad visual moderna',
      
      // Features
      freeDiagnosis: 'Diagnóstico gratuito',
      repair48h: 'Reparación en hasta 48h',
      warranty90days: 'Garantía de 90 días',
      professionalWifi: 'Wi-Fi profesional',
      structuredCabling: 'Cableado estructurado',
      advancedConfig: 'Configuración avanzada',
      smartHome: 'Casa inteligente',
      remoteControl: 'Control remoto',
      fullIntegration: 'Integración completa',
      professionalAntivirus: 'Antivirus profesional',
      advancedFirewall: 'Firewall avanzado',
      monitoring24_7: 'Monitoreo 24/7',
      customSoftware: 'Software a medida',
      webApps: 'Aplicaciones web',
      integratedSystems: 'Sistemas integrados',
      responsiveDesign: 'Diseño responsivo',
      seoOptimized: 'Optimizado para SEO',
      fullEcommerce: 'E-commerce completo',
      
      // CTA Section
      readyToModernize: '¿Listo para Modernizar tu',
      technology: 'Tecnología',
      ctaDescription: 'Contáctanos hoy mismo y descubre cómo podemos transformar tu experiencia tecnológica.',
      scheduleConsultation: 'Agendar Consulta',
      contactUs: 'Contáctanos',
      
      // Footer
      footerDescription: 'Soluciones tecnológicas completas para hogares y empresas en Winter Garden, Florida. Transformamos desafíos en oportunidades digitales.',
      quickLinks: 'Enlaces Rápidos',
      guaranteedServicesFooter: 'Servicios Garantizados',
      
      // Contact
      phone: 'Teléfono',
      email: 'Correo',
      address: 'Dirección',
      businessHours: 'Horario de Atención',
      
      // Booking
      bookingTitle: 'Agendar Servicio',
      bookingDescription: 'Agenda tu servicio de manera rápida y conveniente. Nuestro equipo se contactará para confirmar.',
      selectService: 'Seleccionar Servicio',
      preferredDate: 'Fecha Preferida',
      preferredTime: 'Hora Preferida',
      fullName: 'Nombre Completo',
      phoneNumber: 'Número de Teléfono',
      emailAddress: 'Dirección de Correo',
      additionalMessage: 'Mensaje Adicional (Opcional)',
      sendRequest: 'Enviar Solicitud',
      
      // Common
      loading: 'Cargando...',
      submit: 'Enviar',
      cancel: 'Cancelar',
      close: 'Cerrar'
    },
    
    en: {
      // Navigation
      home: 'Home',
      services: 'Services',
      booking: 'Book Appointment',
      contact: 'Contact',
      freeQuote: 'Free Quote',
      
      // Hero Section
      heroTitle: 'Complete Technology',
      heroTitleHighlight: 'Solutions',
      heroSubtitle: 'From computer maintenance to enterprise cybersecurity. We transform technological challenges into efficient solutions.',
      heroAdvanced: 'Advanced Technology in Florida',
      scheduleService: 'Schedule Service',
      
      // Benefits
      freeEstimate: 'Free estimate',
      freePickupDelivery: 'Free pickup and delivery',
      support24_7: '24/7 support',
      guaranteedServices: 'Guaranteed services',
      certifiedTechnicians: 'Certified technicians',
      afterSalesSupport: 'After-sales support',
      
      // Services
      ourServices: 'Our Services',
      professionalSolutions: 'Professional Technology Solutions',
      servicesDescription: 'We offer a complete portfolio of technology services for homes and businesses in Winter Garden, Florida.',
      viewAllServices: 'View All Services',
      
      // Service Categories
      maintenanceRepair: 'Maintenance & Repair',
      maintenanceDesc: 'Computers and laptops with complete diagnosis and professional repair',
      networkInstallation: 'Network Installation',
      networkDesc: 'Configuration of residential and business networks with high performance',
      homeAutomation: 'Home Automation',
      homeAutomationDesc: 'Transform your house into a smart and connected environment',
      cyberSecurity: 'Cyber Security',
      cyberSecurityDesc: 'Complete protection against digital threats for home and business',
      softwareDevelopment: 'Software Development',
      softwareDesc: 'Customized solutions for your specific needs',
      webDesign: 'Web Design',
      webDesignDesc: 'Creation of professional websites and modern visual identity',
      
      // Features
      freeDiagnosis: 'Free diagnosis',
      repair48h: 'Repair within 48h',
      warranty90days: '90-day warranty',
      professionalWifi: 'Professional Wi-Fi',
      structuredCabling: 'Structured cabling',
      advancedConfig: 'Advanced configuration',
      smartHome: 'Smart home',
      remoteControl: 'Remote control',
      fullIntegration: 'Full integration',
      professionalAntivirus: 'Professional antivirus',
      advancedFirewall: 'Advanced firewall',
      monitoring24_7: '24/7 monitoring',
      customSoftware: 'Custom software',
      webApps: 'Web applications',
      integratedSystems: 'Integrated systems',
      responsiveDesign: 'Responsive design',
      seoOptimized: 'SEO optimized',
      fullEcommerce: 'Full e-commerce',
      
      // CTA Section
      readyToModernize: 'Ready to Modernize your',
      technology: 'Technology',
      ctaDescription: 'Contact us today and discover how we can transform your technological experience.',
      scheduleConsultation: 'Schedule Consultation',
      contactUs: 'Contact Us',
      
      // Footer
      footerDescription: 'Complete technology solutions for homes and businesses in Winter Garden, Florida. We transform challenges into digital opportunities.',
      quickLinks: 'Quick Links',
      guaranteedServicesFooter: 'Guaranteed Services',
      
      // Contact
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      businessHours: 'Business Hours',
      
      // Booking
      bookingTitle: 'Book Service',
      bookingDescription: 'Schedule your service quickly and conveniently. Our team will contact you to confirm.',
      selectService: 'Select Service',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      fullName: 'Full Name',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      additionalMessage: 'Additional Message (Optional)',
      sendRequest: 'Send Request',
      
      // Common
      loading: 'Loading...',
      submit: 'Submit',
      cancel: 'Cancel',
      close: 'Close'
    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};