import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Eye, TrendingUp, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExampleModalUsage } from '@/components/admin/GeneralModal';

export default function AdminDashboard() {
  const stats = [
    { label: 'Page Views', value: '12,543', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Conversions', value: '234', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Products', value: '1', icon: Package, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Testimonials', value: '6', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto"
    >
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <LayoutDashboard className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <p className="text-gray-600 text-lg">
          Overview of your Snack Box landing page performance and settings
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-full ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-lg mb-8">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <CardTitle className="text-xl text-gray-800">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2" disabled>
              <Eye className="w-5 h-5" />
              <span>Preview Site</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2" disabled>
              <Package className="w-5 h-5" />
              <span>Update Product</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2" disabled>
              <TrendingUp className="w-5 h-5" />
              <span>View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Coming in Phase 2 */}
      <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-2">Phase 2 Dashboard Features</h4>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Real-time analytics and visitor tracking</li>
              <li>• Quick edit shortcuts for all page sections</li>
              <li>• Content change history and version control</li>
              <li>• A/B testing configuration</li>
              <li>• SEO performance metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
