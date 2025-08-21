import React from 'react';
import { Trophy } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminWhyChoose() {
  return (
    <PlaceholderPage 
      title="Why Choose Section" 
      description="Manage the benefits and features that make your snack box special"
      icon={Trophy}
    />
  );
}
