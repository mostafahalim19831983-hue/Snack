import React from 'react';
import { MessageSquare } from 'lucide-react';
import { PlaceholderPage } from '@/components/admin/PlaceholderPage';

export default function AdminTestimonials() {
  return (
    <PlaceholderPage 
      title="Testimonials Section" 
      description="Manage customer reviews, ratings, and testimonial content"
      icon={MessageSquare}
    />
  );
}
