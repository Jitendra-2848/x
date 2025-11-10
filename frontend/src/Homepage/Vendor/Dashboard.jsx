import React from 'react';

const FarmerDashboard = ({
  userName = "Sarah",
  activeOrders = 8,
  totalPurchases = 156,
  wishlistItems = 23,
  totalSpent = 12340
}) => (
     <div className="bg-blue-50 pt-6 px-6">
      {/* Welcome Box */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}! <span className="inline-block">👋</span>
          </div>
          <div className="text-gray-600 text-md">Discover fresh products from local farmers today.</div>
        </div>
        <div>
          <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
            BUYER
          </button>
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-3">
            {/* Cart SVG */}
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{activeOrders}</div>
          <div className="text-gray-500 text-base mt-2">Active Orders</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-blue-100 p-3 rounded-full mb-3">
            {/* Bag/Package SVG */}
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M16 10V8a4 4 0 00-8 0v2" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{totalPurchases}</div>
          <div className="text-gray-500 text-base mt-2">Total Purchases</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-orange-100 p-3 rounded-full mb-3">
            {/* Heart SVG */}
            <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M12 21C12 21 7 16.28 4 13.23C1.83 11.05 2.13 7.4 4.71 5.99C7.04 4.74 9.77 6.39 12 9.13C14.23 6.39 16.97 4.74 19.29 5.99C21.87 7.4 22.17 11.05 20 13.23C17 16.28 12 21 12 21Z" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{wishlistItems}</div>
          <div className="text-gray-500 text-base mt-2">Wishlist Items</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-purple-100 p-3 rounded-full mb-3">
            {/* Credit Card/Spent SVG */}
            <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="3" />
              <path d="M2 10h20" />
              <circle cx="7" cy="15" r="1" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">${totalSpent.toLocaleString()}</div>
          <div className="text-gray-500 text-base mt-2">Total Spent</div>
        </div>
      </div>
     </div>
);

export default FarmerDashboard;
