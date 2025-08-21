import React from "react";

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>

        <div className="text-center py-12">
          <p className="text-lg text-gray-600 mb-8">Coming in Phase 2</p>

          <button
            disabled
            className="px-6 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
