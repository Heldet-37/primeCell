import React, { useEffect, useState } from 'react';
import { Shield, Star, Truck, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroBackgrounds = [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?auto=format&fit=crop&q=80&w=1920',
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=1920'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBackgroundImage(heroBackgrounds[currentSlide]);
  }, [currentSlide]);

  const products = [
    {
      id: 1,
      name: "Película de Vidro Premium",
      price: 300,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=600",
      category: "Proteção",
      description: "Proteção máxima para sua tela"
    },
    {
      id: 2,
      name: "Fone de Ouvido Bluetooth Pro",
      price: 100,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600",
      category: "Áudio",
      description: "Som cristalino e bateria duradoura"
    },
    {
      id: 3,
      name: "Power Bank 20000mAh",
      price: 1200,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=600",
      category: "Energia",
      description: "Carregamento rápido e portátil"
    },
  {
    id: 4,
    name: "Capa para Iphone 16",
    price: 500,
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7E4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723930332796",
    category: "protecao",
    description: "Capa resistente e duravel"
  },
  ];

  const features = [
    { icon: Shield, title: "Qualidade Premium", description: "Produtos selecionados e testados" },
    { icon: Star, title: "Garantia Estendida", description: "1 ano de garantia em todos os produtos" },
    { icon: Truck, title: "Entrega Expressa", description: "Entrega em 24-48 horas" },
    { icon: Package, title: "Troca Grátis", description: "7 dias para troca sem custo" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out transform"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Gradiente mais escuro e mais opaco para melhor contraste */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/85"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Acessórios Premium para Celular
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow">
              Eleve a experiência do seu smartphone com nossos acessórios de alta qualidade
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/produtos"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Ver Produtos</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contato" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors duration-300 inline-flex items-center justify-center shadow-lg"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-emerald-500 w-8' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-emerald-100 rounded-xl p-3 inline-block mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
          <p className="text-lg sm:text-xl text-gray-600">Descubra nossa seleção de acessórios premium</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-emerald-600 px-4 py-2 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    {product.price.toLocaleString('pt-MZ')} MT
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/produtos"
            className="inline-flex items-center space-x-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            <span>Ver todos os produtos</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}