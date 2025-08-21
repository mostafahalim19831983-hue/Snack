import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Star,
  Trophy,
  Package,
  MessageSquare,
  DollarSign,
  Share2,
  Search,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const sidebarItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { id: 'hero', label: 'Hero', icon: Star, path: '/admin/hero' },
  { id: 'why-choose', label: 'Why Choose', icon: Trophy, path: '/admin/why-choose' },
  { id: 'walmart', label: 'Walmart', icon: Package, path: '/admin/walmart' },
  { id: 'inside-box', label: 'Inside Box', icon: Package, path: '/admin/inside-box' },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare, path: '/admin/testimonials' },
  { id: 'offer-pricing', label: 'Offer / Pricing', icon: DollarSign, path: '/admin/offer-pricing' },
  { id: 'footer', label: 'Footer (Social Links)', icon: Share2, path: '/admin/footer' },
  { id: 'seo', label: 'SEO', icon: Search, path: '/admin/seo' },
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Admin Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {sidebarItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center px-4 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 mr-4"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Snack Box Admin</h1>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
