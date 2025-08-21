import React from 'react';
import { Package } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminInsideBox() {
  return (
    <PlaceholderPage 
      title="Inside Box Section" 
      description="Manage product gallery and inside box showcase images"
      icon={Package}
    />
  );
}
