import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smartphone, Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Smartphone className="h-8 w-8 text-emerald-600" />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 text-transparent bg-clip-text">
              PrimeCell
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/produtos" className={`${isActive('/produtos')} font-medium transition-colors`}>
              Produtos
            </Link>
            <Link to="/servicos" className={`${isActive('/servicos')} font-medium transition-colors`}>
              Serviços
            </Link>
            <Link to="/sobre" className={`${isActive('/sobre')} font-medium transition-colors`}>
              Sobre
            </Link>
            <Link to="/contato" className={`${isActive('/contato')} font-medium transition-colors`}>
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-3">
              <Link
                to="/produtos"
                className={`${isActive('/produtos')} block py-2 px-4 rounded-lg font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                to="/servicos"
                className={`${isActive('/servicos')} block py-2 px-4 rounded-lg font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                to="/sobre"
                className={`${isActive('/sobre')} block py-2 px-4 rounded-lg font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                to="/contato"
                className={`${isActive('/contato')} block py-2 px-4 rounded-lg font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Smartphone className="h-8 w-8 text-emerald-500" />
                <span className="text-2xl font-bold text-white">PrimeCell</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sua loja especializada em acessórios premium para smartphones. Qualidade e confiança em cada produto.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
                <li><Link to="/produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</Link></li>
                <li><Link to="/servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</Link></li>
                <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Categorias</h4>
              <ul className="space-y-4">
                <li><Link to="/produtos?categoria=protecao" className="text-gray-400 hover:text-white transition-colors">Proteção</Link></li>
                <li><Link to="/produtos?categoria=audio" className="text-gray-400 hover:text-white transition-colors">Áudio</Link></li>
                <li><Link to="/produtos?categoria=energia" className="text-gray-400 hover:text-white transition-colors">Energia</Link></li>
                <li><Link to="/produtos?categoria=acessorios" className="text-gray-400 hover:text-white transition-colors">Acessórios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="text-gray-400">(+258) 872664074</li>
                <li className="text-gray-400">Rua da Tecnologia, Chiuaula</li>
                <li className="text-gray-400">Niassa-Lichinga - Moçambique</li>
                <li className="text-gray-400">helderfonseca472@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 PrimeCell. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}