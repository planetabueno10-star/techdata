import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Computer, 
  Network, 
  Shield, 
  Home as HomeIcon, 
  Building, 
  Wrench, 
  Code, 
  Globe,
  Calendar,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Settings
} from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Computer className="h-8 w-8 text-blue-600" />,
      title: t('maintenanceRepair'),
      description: t('maintenanceDesc'),
      features: [t('freeDiagnosis'), t('repair48h'), t('warranty90days')]
    },
    {
      icon: <Network className="h-8 w-8 text-blue-600" />,
      title: t('networkInstallation'),
      description: t('networkDesc'),
      features: [t('professionalWifi'), t('structuredCabling'), t('advancedConfig')]
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
      title: t('homeAutomation'),
      description: t('homeAutomationDesc'),
      features: [t('smartHome'), t('remoteControl'), t('fullIntegration')]
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: t('cyberSecurity'),
      description: t('cyberSecurityDesc'),
      features: [t('professionalAntivirus'), t('advancedFirewall'), t('monitoring24_7')]
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: t('softwareDevelopment'),
      description: t('softwareDesc'),
      features: [t('customSoftware'), t('webApps'), t('integratedSystems')]
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: t('webDesign'),
      description: t('webDesignDesc'),
      features: [t('responsiveDesign'), t('seoOptimized'), t('fullEcommerce')]
    }
  ];

  const benefits = [
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: t('freeEstimate') },
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: t('freePickupDelivery') },
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: t('support24_7') },
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: t('guaranteedServices') },
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: t('certifiedTechnicians') },
    { icon: <CheckCircle className="h-5 w-5 text-green-600" />, text: t('afterSalesSupport') }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-500 text-white">
              <Zap className="h-4 w-4 mr-2" />
              Tecnologia Avançada em Florida
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções Tecnológicas 
              <span className="text-orange-400"> Completas</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Da manutenção de computadores à cibersegurança empresarial. 
              Transformamos desafios tecnológicos em soluções eficientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Agendar Serviço
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Orçamento Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                {benefit.icon}
                <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
              <Settings className="h-4 w-4 mr-2" />
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções Tecnológicas <span className="text-blue-600">Profissionais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços tecnológicos para residências e empresas em Winter Garden, Florida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Ver Todos os Serviços
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Modernizar sua <span className="text-orange-400">Tecnologia</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato hoje mesmo e descubra como podemos transformar sua experiência tecnológica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                <Calendar className="h-5 w-5 mr-2" />
                Agendar Consulta
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8"
              >
                Falar Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;