import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { services } from '../data/mock';
import { 
  Computer, 
  Network, 
  Shield, 
  Home as HomeIcon, 
  Code, 
  Globe,
  Wrench,
  Settings,
  CheckCircle,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = {
    'computer-repair': <Computer className="h-8 w-8 text-blue-600" />,
    'network-installation': <Network className="h-8 w-8 text-blue-600" />,
    'home-automation': <HomeIcon className="h-8 w-8 text-blue-600" />,
    'software-services': <Settings className="h-8 w-8 text-blue-600" />,
    'cyber-security': <Shield className="h-8 w-8 text-blue-600" />,
    'custom-development': <Code className="h-8 w-8 text-blue-600" />,
    'web-design': <Globe className="h-8 w-8 text-blue-600" />,
    'hardware-upgrade': <Wrench className="h-8 w-8 text-blue-600" />
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">
            <Settings className="h-4 w-4 mr-2" />
            {t('ourServices')}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('professionalSolutions')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('servicesDescription')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  {serviceIcons[service.category]}
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="flex items-center space-x-2 text-blue-600">
                      <span className="text-sm font-medium">+{service.features.length - 3} more features</span>
                    </div>
                  )}
                </div>

                {/* Pricing and Duration */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">{service.pricing}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to="/booking" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-orange-500 group-hover:hover:bg-orange-600 transition-all">
                    {t('scheduleService')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a <span className="text-blue-600">TechData USA</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos especialistas em transformar desafios tecnológicos em soluções eficientes para sua casa ou empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('guaranteedServicesFooter')}</h3>
              <p className="text-gray-600">Garantimos a qualidade de todos os nossos serviços com suporte completo.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('certifiedTechnicians')}</h3>
              <p className="text-gray-600">Equipe altamente qualificada com certificações reconhecidas no mercado.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('support24_7')}</h3>
              <p className="text-gray-600">Atendimento disponível 24 horas por dia, 7 dias por semana para emergências.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato hoje mesmo e receba um orçamento personalizado para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                {t('scheduleService')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8">
                {t('freeQuote')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;