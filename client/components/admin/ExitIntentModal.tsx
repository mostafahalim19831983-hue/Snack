import React, { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only show if mouse leaves from the top and hasn't been shown this session
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl w-full mx-4 max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-orange-50">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <h2 className="text-lg font-semibold text-gray-900">Wait!</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 text-center">
          <p className="text-gray-600 mb-4">
            Are you sure you want to leave the admin dashboard?
          </p>
          <div className="space-y-2">
            <button 
              onClick={handleClose}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Stay on Page
            </button>
            <button 
              onClick={handleClose}
              className="w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              Leave Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
