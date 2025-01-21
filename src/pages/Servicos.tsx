import React from 'react';
import { Smartphone, PenTool as Tool, Clock, Shield, Zap, Wifi, Database, HardDrive, RefreshCcw, ShieldOff, FileIcon as FileRecovery, Settings, Code, Building, Smartphone as AndroidIcon } from 'lucide-react';

const services = [
  {
    icon: Tool,
    title: 'Manutenção de Smartphones',
    description: 'Reparo profissional de smartphones com garantia de serviço.',
    price: 'A partir de 300 MT'
  },
  {
    icon: Shield,
    title: 'Instalação de Películas',
    description: 'Aplicação profissional de películas de proteção com garantia.',
    price: 'A partir de 100 MT'
  },
  {
    icon: Zap,
    title: 'Recuperação de Bateria',
    description: 'Diagnóstico e recuperação de baterias com baixo desempenho.',
    price: 'A partir de 100 MT'
  },
  {
    icon: Database,
    title: 'Backup de Dados',
    description: 'Backup seguro de seus dados importantes antes de qualquer serviço.',
    price: 'A partir de 200 MT'
  },
  {
    icon: Wifi,
    title: 'Problemas de Conectividade',
    description: 'Resolução de problemas com Wi-Fi, Bluetooth e rede móvel.',
    price: 'A partir de 100 MT'
  },
  {
    icon: HardDrive,
    title: 'Limpeza e Otimização',
    description: 'Limpeza física e otimização do desempenho do dispositivo.',
    price: 'A partir de 200 MT'
  },
  {
    icon: RefreshCcw,
    title: 'Atualização do Sistema Operacional',
    description: 'Atualização segura do sistema operacional e correção de bugs.',
    price: 'A partir de 500 MT'
  },
  {
    icon: ShieldOff,
    title: 'Remoção de Vírus e Malware',
    description: 'Eliminação de software malicioso e proteção do dispositivo.',
    price: 'A partir de 450 MT'
  },
  {
    icon: FileRecovery,
    title: 'Recuperação de Dados',
    description: 'Recuperação de fotos, vídeos e arquivos importantes perdidos.',
    price: 'A partir de 600 MT'
  },
  {
    icon: Settings,
    title: 'Configuração de Aplicativos',
    description: 'Instalação e configuração otimizada de aplicativos.',
    price: 'A partir de 100 MT'
  },
  {
    icon: Code,
    title: 'Desenvolvimento de Sistemas',
    description: 'Desenvolvimento de sistemas e aplicativos básicos personalizados.',
    price: 'A partir de 5000 MT'
  },
  {
    icon: Building,
    title: 'Sistemas para Empresas',
    description: 'Sistemas personalizados para pequenas empresas.',
    price: 'A partir de 15000 MT'
  },
  {
    icon: AndroidIcon,
    title: 'Aplicativos Android',
    description: 'Desenvolvimento de aplicativos simples para Android.',
    price: 'A partir de 7500 MT'
  }
];

export default function Servicos() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-emerald-700 py-16 sm:py-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1920"
            alt="Serviços de Manutenção"
          />
          <div className="absolute inset-0 bg-emerald-700/70 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Nossos Serviços
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-emerald-100">
              Oferecemos uma ampla gama de serviços profissionais para manter seu smartphone funcionando perfeitamente.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Por que escolher nossos serviços?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Contamos com profissionais experientes e utilizamos peças originais
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mb-4">
                      {service.description}
                    </p>
                    <p className="text-lg font-semibold text-emerald-600">
                      {service.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Como funciona
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Processo simples e transparente para melhor atendê-lo
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  1. Diagnóstico
                </h3>
                <p className="text-gray-500">
                  Avaliamos seu dispositivo e identificamos o problema
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tool className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  2. Reparo
                </h3>
                <p className="text-gray-500">
                  Realizamos o serviço com peças originais
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  3. Entrega
                </h3>
                <p className="text-gray-500">
                  Devolvemos seu dispositivo funcionando perfeitamente
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Precisa de ajuda com seu smartphone?
            </h2>
            <p className="mt-4 text-xl text-emerald-100">
              Entre em contato conosco hoje mesmo para um orçamento gratuito
            </p>
            <div className="mt-8">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-emerald-50 transition-colors duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}