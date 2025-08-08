import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from './ui/dropdown-menu';
import { Languages, ChevronDown } from 'lucide-react';

const LanguageSwitcher = ({ variant = "default" }) => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇲🇽' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  if (variant === "mobile") {
    return (
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Idioma / Language</h4>
        <div className="grid grid-cols-3 gap-2">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={currentLanguage === lang.code ? "default" : "outline"}
              size="sm"
              onClick={() => changeLanguage(lang.code)}
              className={`text-xs ${
                currentLanguage === lang.code 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span className="mr-1">{lang.flag}</span>
              {lang.code.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-gray-300 text-gray-700 hover:text-blue-600 hover:border-blue-600"
        >
          <Languages size={16} className="mr-2" />
          <span className="mr-1">{currentLang?.flag}</span>
          {currentLang?.code.toUpperCase()}
          <ChevronDown size={14} className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer ${
              currentLanguage === lang.code 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;