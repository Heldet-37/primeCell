import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Login from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      {/* Public Routes */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/produtos"
        element={
          <Layout>
            <Produtos />
          </Layout>
        }
      />
      <Route
        path="/servicos"
        element={
          <Layout>
            <Servicos />
          </Layout>
        }
      />
      <Route
        path="/sobre"
        element={
          <Layout>
            <Sobre />
          </Layout>
        }
      />
      <Route
        path="/contato"
        element={
          <Layout>
            <Contato />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;