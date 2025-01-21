import React, { useEffect, useState } from 'react';
import { Smartphone, Package, Info, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const getPageInfo = (pathname: string) => {
  switch (pathname) {
    case '/produtos':
      return {
        icon: Package,
        title: 'Produtos',
        description: 'Carregando nossos produtos premium...'
      };
    case '/sobre':
      return {
        icon: Info,
        title: 'Sobre Nós',
        description: 'Carregando nossa história...'
      };
    case '/contato':
      return {
        icon: Phone,
        title: 'Contato',
        description: 'Carregando informações de contato...'
      };
    default:
      return {
        icon: Smartphone,
        title: 'PrimeCell',
      };
  }
};

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const location = useLocation();
  const pageInfo = getPageInfo(location.pathname);
  const Icon = pageInfo.icon;

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background with pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-emerald-700">
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 max-w-md mx-auto">
        {/* Icon Container */}
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          {/* Ping Animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-24 h-24 animate-ping opacity-30">
              <Icon className="w-full h-full text-white" />
            </div>
          </div>
          {/* Main Icon */}
          <Icon className="w-20 h-20 text-white relative animate-bounce" />
        </div>

        {/* Text Content */}
        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
          {pageInfo.title}
        </h2>
        <p className="text-emerald-100 mb-8 text-lg">
          {pageInfo.description}
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-xs bg-white/10 rounded-full h-2 mb-4 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/90 text-sm font-medium">
          {progress.toFixed(0)}% Completo
        </p>
      </div>
    </div>
  );
}