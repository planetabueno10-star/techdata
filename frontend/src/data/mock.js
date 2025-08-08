// Mock data for development - will be replaced with real API calls later

export const services = [
  {
    id: 1,
    category: 'computer-repair',
    title: 'Manutenção e Reparação de Computadores',
    description: 'Serviços completos de diagnóstico, reparo e manutenção para desktops e notebooks',
    features: [
      'Diagnóstico completo gratuito',
      'Limpeza interna e externa',
      'Troca de componentes defeituosos',
      'Otimização de performance',
      'Backup de dados',
      'Garantia de 90 dias'
    ],
    pricing: 'A partir de $50',
    duration: '24-48 horas'
  },
  {
    id: 2,
    category: 'network-installation',
    title: 'Instalação e Configuração de Redes',
    description: 'Implementação de redes Wi-Fi, cabeadas e configurações avançadas',
    features: [
      'Projeto de rede personalizado',
      'Instalação de roteadores e switches',
      'Configuração de Wi-Fi empresarial',
      'Cabeamento estruturado Cat6/Cat6A',
      'Testes de velocidade e qualidade',
      'Suporte técnico pós-instalação'
    ],
    pricing: 'A partir de $150',
    duration: '1-3 dias'
  },
  {
    id: 3,
    category: 'home-automation',
    title: 'Automação Doméstica e Empresarial',
    description: 'Transforme seu ambiente em um espaço inteligente e conectado',
    features: [
      'Sistemas de iluminação inteligente',
      'Controle de climatização',
      'Segurança automatizada',
      'Integração de dispositivos IoT',
      'Controle por voz e aplicativo',
      'Configuração de rotinas personalizadas'
    ],
    pricing: 'A partir de $300',
    duration: '2-5 dias'
  },
  {
    id: 4,
    category: 'software-services',
    title: 'Instalação e Configuração de Software',
    description: 'Instalação, configuração e otimização de softwares especializados',
    features: [
      'Instalação de sistemas operacionais',
      'Configuração de softwares corporativos',
      'Migração de dados',
      'Licenciamento e ativação',
      'Treinamento básico de uso',
      'Suporte técnico continuado'
    ],
    pricing: 'A partir de $75',
    duration: '2-6 horas'
  },
  {
    id: 5,
    category: 'cyber-security',
    title: 'Consultoria em Cyber Security',
    description: 'Proteção completa contra ameaças digitais para residências e empresas',
    features: [
      'Auditoria de segurança',
      'Implementação de firewalls',
      'Antivírus empresarial',
      'Backup automático em nuvem',
      'Treinamento em segurança',
      'Monitoramento contínuo'
    ],
    pricing: 'A partir de $200',
    duration: '1-2 dias'
  },
  {
    id: 6,
    category: 'custom-development',
    title: 'Desenvolvimento de Software Personalizado',
    description: 'Criação de soluções sob medida para suas necessidades específicas',
    features: [
      'Análise de requisitos',
      'Desenvolvimento de aplicações web',
      'Sistemas de gestão personalizados',
      'Integração com APIs',
      'Testes e validação',
      'Suporte e manutenção'
    ],
    pricing: 'Consulte-nos',
    duration: '2-8 semanas'
  },
  {
    id: 7,
    category: 'web-design',
    title: 'Design e Desenvolvimento de Sites',
    description: 'Criação de sites profissionais e sistemas web modernos',
    features: [
      'Design responsivo moderno',
      'Otimização para SEO',
      'E-commerce completo',
      'Hospedagem e domínio',
      'Certificado SSL',
      'Suporte e atualizações'
    ],
    pricing: 'A partir de $500',
    duration: '1-4 semanas'
  },
  {
    id: 8,
    category: 'hardware-upgrade',
    title: 'Upgrade e Otimização de Hardware',
    description: 'Melhore a performance do seu equipamento com upgrades inteligentes',
    features: [
      'Análise de performance',
      'Upgrade de memória RAM',
      'Instalação de SSD',
      'Troca de placas de vídeo',
      'Otimização de cooling',
      'Testes de estabilidade'
    ],
    pricing: 'A partir de $100',
    duration: '1-2 dias'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    company: 'Loja Flores do Campo',
    rating: 5,
    text: 'A TechData USA salvou meu negócio! Meu sistema tinha crashado e eles recuperaram tudo em 24 horas. Profissionalismo excepcional!',
    service: 'Recuperação de Dados'
  },
  {
    id: 2,
    name: 'João Santos',
    company: 'Residencial',
    rating: 5,
    text: 'Instalaram uma rede Wi-Fi profissional em casa. Agora tenho internet rápida em todos os cômodos. Recomendo demais!',
    service: 'Instalação de Rede'
  },
  {
    id: 3,
    name: 'Carlos Mendes',
    company: 'Escritório de Advocacia',
    rating: 5,
    text: 'Excelente consultoria em cibersegurança. Agora nossos dados estão 100% protegidos. Equipe muito competente.',
    service: 'Cyber Security'
  }
];

export const mockBookings = [
  {
    id: 1,
    name: 'Ana Costa',
    email: 'ana@email.com',
    phone: '(407) 555-0123',
    service: 'computer-repair',
    date: '2025-01-20',
    time: '10:00',
    message: 'Notebook não liga mais, preciso de diagnóstico urgente.',
    status: 'pending'
  }
];

export const businessHours = {
  monday: { open: '08:00', close: '18:00', closed: false },
  tuesday: { open: '08:00', close: '18:00', closed: false },
  wednesday: { open: '08:00', close: '18:00', closed: false },
  thursday: { open: '08:00', close: '18:00', closed: false },
  friday: { open: '08:00', close: '18:00', closed: false },
  saturday: { open: '09:00', close: '17:00', closed: false },
  sunday: { open: '', close: '', closed: true }
};

export const contactInfo = {
  phone: '(407) 729-2141',
  email: 'techdatausa@hotmail.com',
  address: 'Winter Garden, Florida - USA',
  businessName: 'TechData USA'
};