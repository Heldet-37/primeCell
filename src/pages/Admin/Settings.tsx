import React, { useState } from 'react';
import { Save, Bell, Lock, Globe, Mail, Smartphone, Moon, Sun } from 'lucide-react';
import AdminLayout from './AdminLayout';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [language, setLanguage] = useState('pt');

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar as configurações
    alert('Configurações salvas com sucesso!');
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Configurações</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Configurações Gerais */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Configurações Gerais</h2>
              <form onSubmit={handleSaveSettings} className="space-y-6">
                {/* Aparência */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Aparência
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setDarkMode(false)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        !darkMode 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Sun className="h-5 w-5" />
                      <span>Claro</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDarkMode(true)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        darkMode 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Moon className="h-5 w-5" />
                      <span>Escuro</span>
                    </button>
                  </div>
                </div>

                {/* Idioma */}
                <div>
                  <label htmlFor="language" className="text-sm font-medium text-gray-700 mb-2 block">
                    Idioma
                  </label>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <select
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2"
                    >
                      <option value="pt">Português</option>
                      <option value="en">English</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                </div>

                {/* Notificações */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Notificações
                  </label>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <span className="text-sm text-gray-700">Notificações por Email</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-5 w-5 text-gray-400" />
                        <span className="text-sm text-gray-700">Notificações Push</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={pushNotifications}
                          onChange={(e) => setPushNotifications(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Save className="h-5 w-5" />
                  <span>Salvar Alterações</span>
                </button>
              </form>
            </div>

            {/* Segurança */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Segurança</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="current-password" className="text-sm font-medium text-gray-700 block mb-2">
                    Senha Atual
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      id="current-password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Digite sua senha atual"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="new-password" className="text-sm font-medium text-gray-700 block mb-2">
                    Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      id="new-password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Digite a nova senha"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="confirm-password" className="text-sm font-medium text-gray-700 block mb-2">
                    Confirmar Nova Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      id="confirm-password"
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Confirme a nova senha"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Alterar Senha
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar com Informações */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Conta</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 block">Nome</label>
                  <p className="text-gray-900">Hélder Alves</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block">Email</label>
                  <p className="text-gray-900">helder@example.com</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block">Função</label>
                  <p className="text-gray-900">Administrador</p>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block">Membro desde</label>
                  <p className="text-gray-900">Março 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade Recente</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Lock className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Alteração de senha</p>
                    <p className="text-xs text-gray-500">Há 2 dias</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Bell className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Notificações ativadas</p>
                    <p className="text-xs text-gray-500">Há 5 dias</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Globe className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Idioma alterado</p>
                    <p className="text-xs text-gray-500">Há 1 semana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dicas de Segurança</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Lock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">Use uma senha forte com pelo menos 8 caracteres, incluindo números e símbolos.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">Mantenha as notificações ativadas para ser alertado sobre atividades suspeitas.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">Verifique regularmente seu email para atualizações importantes de segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}