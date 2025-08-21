import React from 'react';
import { Search } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminSEO() {
  return (
    <PlaceholderPage 
      title="SEO Optimization" 
      description="Manage meta titles, descriptions, keywords, and SEO settings"
      icon={Search}
    />
  );
}
