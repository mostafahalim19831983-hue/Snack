import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export function PlaceholderPage({ title, description, icon: Icon }: PlaceholderPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-2">
          {Icon && <Icon className="w-8 h-8 text-blue-600" />}
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        </div>
        {description && (
          <p className="text-gray-600 text-lg">{description}</p>
        )}
      </div>

      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <CardTitle className="text-xl text-gray-800">
            {title} Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {Icon && <Icon className="w-8 h-8 text-blue-600" />}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Coming in Phase 2
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              This section will allow you to manage all {title.toLowerCase()} content, 
              including text, images, and settings.
            </p>
            
            <div className="flex justify-center space-x-4">
              <Button disabled className="px-6 py-2">
                Save Changes
              </Button>
              <Button variant="outline" disabled className="px-6 py-2">
                Preview
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase 2 Preview */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Phase 2 Features</h4>
            <p className="text-blue-800 text-sm">
              In the next phase, you'll be able to edit content directly, 
              upload images, modify links, and see live previews of your changes.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
