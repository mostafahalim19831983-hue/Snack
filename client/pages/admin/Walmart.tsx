import React from 'react';
import { Package } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminWalmart() {
  return (
    <PlaceholderPage 
      title="Walmart Section" 
      description="Manage Walmart trust indicators, seller rating, and purchase links"
      icon={Package}
    />
  );
}
