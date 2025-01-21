import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'protecao', name: 'Proteção' },
  { id: 'audio', name: 'Áudio' },
  { id: 'energia', name: 'Energia' },
  { id: 'acessorios', name: 'Acessórios' }
];

const products = [
  {
    id: 1,
    name: "Película de Vidro Premium",
    price: 300,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=600",
    category: "protecao",
    description: "Proteção máxima para sua tela"
  },
  {
    id: 2,
    name: "Fone de Ouvido Bluetooth Pro",
    price: 1000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600",
    category: "audio",
    description: "Som cristalino e bateria duradoura"
  },
  {
    id: 3,
    name: "Power Bank 20000mAh",
    price: 1200,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=600",
    category: "energia",
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
  {
    id: 200,
    name: "Fone de Ouvido TWS",
    price: 750,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&q=80&w=600",
    category: "audio",
    description: "Áudio sem fio de alta qualidade"
  },
  {
    id: 6,
    name: "Suporte Veicular Magnético",
    price: 500,
    image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&q=80&w=600",
    category: "acessorios",
    description: "Suporte seguro e prático"
  },
  {
    id: 7,
    name: "Carregador Rápido 65W",
    price: 700,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=600",
    category: "energia",
    description: "Carregamento ultra rápido"
  },
  {
    id: 8,
    name: "Capa para Tecno Spark 10 Pro",
    price: 300,
    image: "https://m.media-amazon.com/images/I/51Ug30Gv9YL.jpg",
    category: "protecao",
    description: "Capa para o seu Tecno Spark 10 Pro"
  },
  {
    id: 9,
    name: "Mouse RedDragon",
    price: 600,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvEEH5BOG7-auMcJ-hITORiSvZMQSQysuhQQ&s",
    category: "acessorios",
    description: "Mouse redDrago veloz"
  },
  {
    id: 10,
    name: "KeyBoards",
    price: 700,
    image: "https://m.media-amazon.com/images/I/71pHnBCAqmL.jpg",
    category: "acessorios",
    description: "Teclados leves e com fio"
  },
  {
    id: 11,
    name: "Fones de ouvido",
    price: 700,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPXfeDt5hJmrEqteqyEK7xxJLaBb9CvmoHg&s",
    category: "audio",
    description: "Fones de ouvido sem fio"
  },
  {
    id: 12,
    name: "Fones de ouvido",
    price: 350,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMI5xLBQoDSidkaoeNXtuJS2pgae5-EFSvBA&s",
    category: "audio",
    description: "Fones de ouvido sem fio"
  },
  {
    id: 13,
    name: "Protetor de tela",
    price: 350,
    image: "https://www.litoscreen.com/js/htmledit/kindeditor/attached/20221021/20221021134145_54793.jpg",
    category: "protecao",
    description: "Protetor de tela"
  },
  {
    id: 14,
    name: "Carregadores",
    price: 500,
    image: "https://cdn.awsli.com.br/600x450/1258/1258828/produto/263215739/gs-832-2-s80e9sp0re.JPG",
    category: "energia",
    description: "Carregadores de iphone e type-c"
  },
  {
    id: 15,
    name: "Carregador a cabo",
    price: 250,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhevZH0lzJFHIJJIVJeisuCCb5V0zwkDy88A&s",
    category: "energia",
    description: "Carregadores simples original"
  },
  {
    id: 16,
    name: "Auriculares RXD",
    price: 150,
    image: "https://image.kilimall.com/kenya/shop/store/goods/10010/2023/06/1685783876952d849a331465d4a629dc8aabafc3ee4f7.jpg",
    category: "audio",
    description: "Auriculares com fio"
  },
  {
    id: 17,
    name: "Bluethoot",
    price: 450,
    image: "https://i.gdm.net.br/2024/07/19175319/melhores-caixas-de-som-bluetooth.jpg",
    category: "audio",
    description: "Caixa de som bluetooth"
  },
  {
    id: 18,
    name: "Suporte para celular",
    price: 500,
    image: "https://www.vxcase.com.br/cdn/shop/products/suporte-para-celular-de-mesa-articulado-iron-holder-celular_jpg.png?v=1683656590&width=1214",
    category: "protecao",
    description: "Suporte para celular"
  },
  {
    id: 19,
    name: "Tela limpa",
    price: 200,
    image: "https://http2.mlstatic.com/D_735553-MLB79908091390_102024-O.jpg",
    category: "protecao",
    description: "kit de limpeza para celulares"
  },
  {
    id: 20,
    name: "Cartão de memória",
    price: 700,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ztHIl8lhs2bVJTeCsULr5Wboe45PsaIRUA&s",
    category: "acessorios",
    description: "Cartão de memória"
  },
  {
    id: 21,
    name: "Bateria Itel",
    price: 400,
    image: "https://sc04.alicdn.com/kf/H39c0533488714b9e8afbbeb3949b63d3r.jpg",
    category: "energia",
    description: "Bateria para o seu Itel"
  },
  {
    id: 22,
    name: "Bateria Tecno",
    price: 1000,
    image: "https://ae01.alicdn.com/kf/S197d5e58ef374b79b6a46d83dd8d697eS.jpg",
    category: "energia",
    description: "Bateria para o seu Tecno Spark 7 Pro"
  },
  {
    id: 23,
    name: "Bateria Itel",
    price: 400,
    image: "https://sc04.alicdn.com/kf/Hab3344149fa549e29f483fca8e22b632x/257947255/Hab3344149fa549e29f483fca8e22b632x.jpg",
    category: "energia",
    description: "Bateria para o seu Itel 2160"
  },
  {
    id: 24,
    name: "Bateria Samsung",
    price: 1000,
    image: "https://images.tcdn.com.br/img/img_prod/1244279/180_bateria_samsung_hq_50s_slc_50_a02s_a03s_a03_core_a04_a04e_1317_1_6b4b3e2ad6ece2a48103e0e81a443de9.jpg",
    category: "energia",
    description: "Bateria para o seu Samsung"
  }

];

export default function Produtos() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h1>
        <p className="text-lg text-gray-600">Descubra nossa seleção completa de acessórios premium para seu smartphone</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors md:hidden"
          >
            <Filter className="h-5 w-5" />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`md:w-64 space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900 mb-4">Categorias</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-indigo-600">
                      {product.price.toLocaleString('pt-MZ')} MT
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}