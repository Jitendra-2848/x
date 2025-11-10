// FarmerDashboard.jsx
import React from 'react';

const FarmerDashboard = () => {
  return (
    <div className="bg-blue-50 pt-6 px-6">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 10V3.5a1.5 1.5 0 10-3 0V10m-7 8V7a5 5 0 015-5h6a5 5 0 015 5v11"></path>
          </svg>
          Quick Actions
        </div>
        <div className="grid grid-cols-5 gap-4">
          {/* Add New Product */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="16"/>
              <line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
            Add New Product
          </button>
          {/* Manage Inventory */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="13" rx="2"/>
              <path d="M16 10V8a4 4 0 00-8 0v2"/>
            </svg>
            Manage Inventory
          </button>
          {/* Track Shipments */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
              <rect x="1" y="3" width="15" height="13" rx="2"/>
              <path d="M16 8h3v8a2 2 0 01-2 2h-7"/>
              <circle cx="6" cy="18" r="2"/>
              <circle cx="18" cy="18" r="2"/>
            </svg>
            Track Shipments
          </button>
          {/* Messages */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Messages
          </button>
          {/* View Orders */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.1" viewBox="0 0 24 24">
              <rect x="5" y="3" width="14" height="18" rx="2"/>
              <line x1="9" y1="7" x2="15" y2="7"/>
              <line x1="9" y1="11" x2="15" y2="11"/>
              <line x1="9" y1="15" x2="13" y2="15"/>
            </svg>
            View Orders
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {/* Settings */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200 col-span-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33h.09V3A2 2 0 0112 1a2 2 0 012 2v.09a1.65 1.65 0 001 1.51c.41.18.9.18 1.32 0a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001.51 1 1.65 1.65 0 00.33-1.82l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06z"/>
            </svg>
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default FarmerDashboard;
