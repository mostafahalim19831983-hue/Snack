import React from 'react';
import { DollarSign } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminOfferPricing() {
  return (
    <PlaceholderPage 
      title="Offer / Pricing Section" 
      description="Manage pricing, offers, benefits list, and call-to-action buttons"
      icon={DollarSign}
    />
  );
}
