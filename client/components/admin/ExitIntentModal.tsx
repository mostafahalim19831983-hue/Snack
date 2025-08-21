import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, Save, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExitIntentModalProps {
  onSave?: () => void;
  onDiscard?: () => void;
  hasUnsavedChanges?: boolean;
}

export function ExitIntentModal({ 
  onSave, 
  onDiscard, 
  hasUnsavedChanges = false 
}: ExitIntentModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only show if mouse leaves from the top of the page and hasn't been shown yet
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
        return e.returnValue;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown, isVisible, hasUnsavedChanges]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSave = () => {
    onSave?.();
    setIsVisible(false);
  };

  const handleDiscard = () => {
    onDiscard?.();
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-60"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl shadow-2xl w-full mx-4 max-w-md overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Wait! Don't leave yet
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="text-white hover:bg-white hover:bg-opacity-20"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {hasUnsavedChanges ? 'You have unsaved changes!' : 'Hold on!'}
                </h4>
                <p className="text-gray-600">
                  {hasUnsavedChanges 
                    ? 'You have made changes that haven\'t been saved yet. Would you like to save them before leaving?'
                    : 'Are you sure you want to leave the admin dashboard? Any unsaved work will be lost.'
                  }
                </p>
              </div>

              <div className="space-y-3">
                {hasUnsavedChanges && (
                  <Button 
                    onClick={handleSave} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                )}
                
                <Button 
                  variant="outline" 
                  onClick={handleClose}
                  className="w-full"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Continue Editing
                </Button>

                {hasUnsavedChanges && (
                  <Button 
                    variant="ghost" 
                    onClick={handleDiscard}
                    className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Leave Without Saving
                  </Button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-3 border-t">
              <p className="text-xs text-gray-500 text-center">
                Phase 2 will include auto-save functionality
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Hook to manage exit intent modal
export function useExitIntentModal(hasUnsavedChanges = false) {
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    // This will be implemented in Phase 2
    console.log('Saving changes...');
  };

  const handleDiscard = () => {
    // This will be implemented in Phase 2
    console.log('Discarding changes...');
  };

  return {
    showModal,
    setShowModal,
    ExitIntentModal: () => (
      <ExitIntentModal
        onSave={handleSave}
        onDiscard={handleDiscard}
        hasUnsavedChanges={hasUnsavedChanges}
      />
    ),
  };
}
