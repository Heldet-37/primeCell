import React from 'react';
import { 
  Package,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout?: () => void;
}

export default function AdminLayout({ children, onLogout }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 flex items-center justify-between shadow-md">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-500 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <span className="text-lg font-semibold text-gray-900">Admin Panel</span>
        <button
          onClick={handleLogout}
          className="lg:hidden text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50"
        >
          <LogOut className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 bg-emerald-600">
            <span className="text-white text-xl font-bold">PrimeCell Admin</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <button
              onClick={() => {}}
              className="flex items-center space-x-3 w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Package className="h-5 w-5" />
              <span>Produtos</span>
            </button>
            {/* Add more navigation items here */}
          </nav>

          {/* Logout Button (Desktop) */}
          <div className="hidden lg:block p-4 border-t">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Sair</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64 pt-16 lg:pt-0 min-h-screen">
        <div className="h-full">{children}</div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}