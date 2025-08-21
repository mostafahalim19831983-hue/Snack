import React from 'react';
import { Star } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminHero() {
  return (
    <PlaceholderPage 
      title="Hero Section" 
      description="Manage the main hero section with title, description, pricing, and product images"
      icon={Star}
    />
  );
}
