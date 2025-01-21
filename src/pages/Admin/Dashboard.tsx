import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2, Search, Package, ArrowUp, ArrowDown, Filter, X, Upload, Loader2, AlertTriangle, Save } from 'lucide-react';
import AdminLayout from './AdminLayout';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  stock: number;
  status: 'active' | 'inactive';
}

interface ProductFormData {
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
  stock: string;
  status: 'active' | 'inactive';
}

interface ConfirmationModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDestructive?: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  isDestructive = false
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10 ${
                isDestructive ? 'bg-red-100' : 'bg-yellow-100'
              }`}>
                <AlertTriangle className={`h-6 w-6 ${
                  isDestructive ? 'text-red-600' : 'text-yellow-600'
                }`} />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onConfirm}
              className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm ${
                isDestructive 
                  ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
                  : 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500'
              }`}
            >
              {confirmText}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const initialFormData: ProductFormData = {
  name: '',
  price: '',
  category: 'protecao',
  image: '',
  description: '',
  stock: '',
  status: 'active'
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Película de Vidro Premium",
    price: 300,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=80&w=600",
    category: "protecao",
    description: "Proteção máxima para sua tela",
    stock: 10,
    status: 'active'
  },
  {
    id: 2,
    name: "Fone de Ouvido Bluetooth Pro",
    price: 1000,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=600",
    category: "audio",
    description: "Som cristalino e bateria duradoura",
    stock: 10,
    status: 'active'
  },
  {
    id: 3,
    name: "Power Bank 20000mAh",
    price: 1200,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=600",
    category: "energia",
    description: "Carregamento rápido e portátil",
    stock: 10,
    status: 'active'
  }
];

const categories = [
  { id: 'protecao', name: 'Proteção' },
  { id: 'audio', name: 'Áudio' },
  { id: 'energia', name: 'Energia' },
  { id: 'acessorios', name: 'Acessórios' }
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<ProductFormData>>({});
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Product;
    direction: 'asc' | 'desc';
  } | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Stats
  const totalProducts = products.length;
  const activeProducts = products.filter(product => product.status === 'active').length;
  const lowStock = products.filter(product => product.stock < 10).length;
  const totalValue = products.reduce((acc, product) => acc + (product.price * product.stock), 0);

  const stats = [
    {
      title: 'Total de Produtos',
      value: totalProducts,
      icon: Package,
      color: 'bg-blue-500',
      trend: '+5%',
      trendUp: true
    },
    {
      title: 'Valor do Estoque',
      value: `${totalValue.toLocaleString('pt-MZ')} MT`,
      icon: Package,
      color: 'bg-green-500',
      trend: '+12%',
      trendUp: true
    },
    {
      title: 'Produtos Ativos',
      value: activeProducts,
      icon: Package,
      color: 'bg-purple-500',
      trend: '+3%',
      trendUp: true
    },
    {
      title: 'Estoque Baixo',
      value: lowStock,
      icon: Package,
      color: 'bg-red-500',
      trend: '-2%',
      trendUp: false
    }
  ];

  const handleSort = (key: keyof Product) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
    
    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setProducts(sortedProducts);
  };

  const handleDelete = async (id: number) => {
    setProductToDelete(id);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = async () => {
    if (productToDelete) {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProducts(products.filter(product => product.id !== productToDelete));
      } finally {
        setIsLoading(false);
        setShowDeleteConfirmation(false);
        setProductToDelete(null);
      }
    }
  };

  const handleStatusToggle = async (product: Product) => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const updatedProducts = products.map(p => {
        if (p.id === product.id) {
          return {
            ...p,
            status: p.status === 'active' ? 'inactive' : 'active'
          };
        }
        return p;
      });
      setProducts(updatedProducts);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const errors: Partial<ProductFormData> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }

    if (!formData.price.trim()) {
      errors.price = 'Preço é obrigatório';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      errors.price = 'Preço deve ser um número positivo';
    }

    if (!formData.stock.trim()) {
      errors.stock = 'Estoque é obrigatório';
    } else if (isNaN(Number(formData.stock)) || Number(formData.stock) < 0) {
      errors.stock = 'Estoque deve ser um número não negativo';
    }

    if (!formData.image.trim()) {
      errors.image = 'Imagem é obrigatória';
    }

    if (!formData.description.trim()) {
      errors.description = 'Descrição é obrigatória';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const productData: Product = {
        id: editingProduct ? editingProduct.id : Math.max(...products.map(p => p.id)) + 1,
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        image: formData.image,
        description: formData.description,
        stock: Number(formData.stock),
        status: formData.status
      };

      if (editingProduct) {
        setProducts(products.map(p => p.id === editingProduct.id ? productData : p));
      } else {
        setProducts([...products, productData]);
      }

      setShowAddModal(false);
      setFormData(initialFormData);
      setFormErrors({});
      setEditingProduct(null);
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      category: product.category,
      image: product.image,
      description: product.description,
      stock: product.stock.toString(),
      status: product.status
    });
    setShowAddModal(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name as keyof ProductFormData]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: reader.result as string
        }));
        if (formErrors.image) {
          setFormErrors(prev => ({
            ...prev,
            image: undefined
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AdminLayout onLogout={() => setShowLogoutConfirmation(true)}>
      <div className="py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Gerenciar Produtos</h1>
                <p className="mt-1 text-sm text-gray-600">
                  Adicione, edite ou remova produtos do catálogo
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingProduct(null);
                  setFormData(initialFormData);
                  setShowAddModal(true);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors w-full sm:w-auto justify-center"
              >
                <Plus className="h-5 w-5 mr-2" />
                Adicionar Produto
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className={`flex items-center ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trendUp ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">{stat.trend}</span>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                <p className="text-lg sm:text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Filters and Actions */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Buscar produtos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div className="w-full sm:w-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full sm:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="all">Todas as categorias</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Products Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Produto
                      </th>
                      <th scope="col" className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Categoria
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Preço
                      </th>
                      <th scope="col" className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estoque
                      </th>
                      <th scope="col" className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-lg object-cover"
                                src={product.image}
                                alt={product.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {product.name}
                              </div>
                              <div className="text-sm text-gray-500 hidden sm:block">
                                {product.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-100 text-emerald-800">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.price.toLocaleString('pt-MZ')} MT
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`inline-block h-2 w-2 rounded-full mr-2 ${
                              product.stock > 20 ? 'bg-green-400' :
                              product.stock > 10 ? 'bg-yellow-400' : 'bg-red-400'
                            }`}></span>
                            <span className="text-sm text-gray-900">{product.stock}</span>
                          </div>
                        </td>
                        <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleStatusToggle(product)}
                            disabled={isLoading}
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              product.status === 'active'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {product.status === 'active' ? 'Ativo' : 'Inativo'}
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end items-center space-x-2">
                            <button
                              onClick={() => handleEdit(product)}
                              disabled={isLoading}
                              className="text-indigo-600 hover:text-indigo-900 p-2"
                            >
                              <Pencil className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              disabled={isLoading}
                              className="text-red-600 hover:text-red-900 p-2"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum produto encontrado</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Comece adicionando um novo produto ou ajuste seus filtros.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {editingProduct ? 'Editar Produto' : 'Adicionar Novo Produto'}
                      </h3>
                      <button
                        onClick={() => setShowAddModal(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Nome */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Nome do Produto
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full rounded-md shadow-sm ${
                            formErrors.name 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                        )}
                      </div>

                      {/* Preço e Estoque */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Preço (MT)
                          </label>
                          <input
                            type="number"
                            name="price"
                            id="price"
                            min="0"
                            step="1"
                            value={formData.price}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full rounded-md shadow-sm ${
                              formErrors.price 
                                ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
                            }`}
                          />
                          {formErrors.price && (
                            <p className="mt-1 text-sm text-red-600">{formErrors.price}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                            Estoque
                          </label>
                          <input
                            type="number"
                            name="stock"
                            id="stock"
                            min="0"
                            step="1"
                            value={formData.stock}
                            onChange={handleInputChange}
                            className={`mt-1 block w-full rounded-md shadow-sm ${
                              formErrors.stock 
                                ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                                : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
                            }`}
                          />
                          {formErrors.stock && (
                            <p className="mt-1 text-sm text-red-600">{formErrors.stock}</p>
                          )}
                        </div>
                      </div>

                      {/* Categoria */}
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                          Categoria
                        </label>
                        <select
                          name="category"
                          id="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          {categories.map(category => (
                            <option key={category.id} value={category .id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Descrição */}
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Descrição
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          rows={3}
                          value={formData.description}
                          onChange={handleInputChange}
                          className={`mt-1 block w-full rounded-md shadow-sm ${
                            formErrors.description 
                              ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                              : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'
                          }`}
                        />
                        {formErrors.description && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.description}</p>
                        )}
                      </div>

                      {/* Imagem */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Imagem do Produto
                        </label>
                        <div className="mt-1 flex items-center space-x-4">
                          {formData.image && (
                            <div className="relative h-20 w-20">
                              <img
                                src={formData.image}
                                alt="Preview"
                                className="h-20 w-20 rounded-lg object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => setFormData({ ...formData, image: '' })}
                                className="absolute -top-2 -right-2 rounded-full bg-red-100 p-1 text-red-600 hover:bg-red-200"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                          <div>
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleImageUpload}
                              accept="image/*"
                              className="hidden"
                            />
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                            >
                              <Upload className="h-5 w-5 text-gray-400" />
                              <span>Upload Imagem</span>
                            </button>
                          </div>
                        </div>
                        {formErrors.image && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.image}</p>
                        )}
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Status
                        </label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                        >
                          <option value="active">Ativo</option>
                          <option value="inactive">Inativo</option>
                        </select>
                      </div>

                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          onClick={() => setShowAddModal(false)}
                          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                              Salvando...
                            </>
                          ) : (
                            <>
                              <Save className="h-5 w-5 mr-2" />
                              {editingProduct ? 'Atualizar' : 'Adicionar'}
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeleteConfirmation}
        title="Excluir Produto"
        message="Tem certeza que deseja excluir este produto? Esta ação não pode ser desfeita."
        confirmText="Sim, excluir"
        cancelText="Cancelar"
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteConfirmation(false)}
        isDestructive={true}
      />

      {/* Logout Confirmation Modal */}
      <ConfirmationModal
        isOpen={showLogoutConfirmation}
        title="Confirmar Saída"
        message="Tem certeza que deseja sair do painel administrativo?"
        confirmText="Sim, sair"
        cancelText="Cancelar"
        onConfirm={() => {
          localStorage.removeItem('adminAuth');
          navigate('/admin/login');
        }}
        onCancel={() => setShowLogoutConfirmation(false)}
        isDestructive={false}
      />
    </AdminLayout>
  );
}