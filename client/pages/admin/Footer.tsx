import React from 'react';
import { Share2 } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminFooter() {
  return (
    <PlaceholderPage 
      title="Footer (Social Links)" 
      description="Manage footer content and social media links"
      icon={Share2}
    />
  );
}
