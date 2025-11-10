// FarmerDashboard.jsx
import React from 'react';

const FarmerDashboard = () => {
  return (
   <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 10V3.5a1.5 1.5 0 10-3 0V10m-7 8V7a5 5 0 015-5h6a5 5 0 015 5v11"></path>
          </svg>
          Quick Actions
        </div>
        <div className="grid grid-cols-5 gap-4">
          {/* Browse Products */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Browse Products
          </button>
          {/* My Orders */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M16 10V8a4 4 0 00-8 0v2" />
            </svg>
            My Orders
          </button>
          {/* Wishlist */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 21C12 21 7 16.28 4 13.23C1.83 11.05 2.13 7.4 4.71 5.99C7.04 4.74 9.77 6.39 12 9.13C14.23 6.39 16.97 4.74 19.29 5.99C21.87 7.4 22.17 11.05 20 13.23C17 16.28 12 21 12 21Z" />
            </svg>
            Wishlist
          </button>
          {/* Favorite Sellers */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 17.75L7.12 20.52L8.27 15.02L4.55 11.24L10.04 10.62L12 5.5L13.96 10.62L19.45 11.24L15.73 15.02L16.88 20.52L12 17.75Z" />
            </svg>
            Favorite Sellers
          </button>
          {/* Track Delivery */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="1" y="3" width="15" height="13" rx="2" />
              <path d="M16 8h3v8a2 2 0 01-2 2h-7" />
              <circle cx="6" cy="18" r="2" />
              <circle cx="18" cy="18" r="2" />
            </svg>
            Track Delivery
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          {/* Payment Methods */}
          <button className="bg-gray-100 text-gray-800 font-semibold py-4 rounded-lg shadow flex flex-col items-center gap-1 hover:bg-gray-200 col-span-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="10" rx="2" />
              <path d="M6 15h.01" />
              <path d="M10 15h4" />
            </svg>
            Payment Methods
          </button>
        </div>
      </div>
  );
}

export default FarmerDashboard;
