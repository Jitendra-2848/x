// FarmerDashboard.jsx
import React from 'react';

const FarmerDashboard = ({
  userName = "John",
  activeCrops = 12,
  totalRevenue = 24500,
  productsListed = 28,
  monthSales = 23
}) => (
    <div className="bg-blue-50 pt-6 px-6">
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}! <span className="inline-block">👋</span>
          </div>
          <div className="text-gray-600 text-md">Here's what's happening with your farm today.</div>
        </div>
        <div>
          <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-600 transition">
            FARMER
          </button>
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {/* Active Crops */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-3">
            {/* Tractor SVG */}
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24">
              <circle cx="7" cy="17" r="2.5"/>
              <circle cx="19" cy="17" r="2.5"/>
              <path d="M7 17v-5h7l3 5H7zm2-3v-4a2 2 0 012-2h2" />
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{activeCrops}</div>
          <div className="text-gray-500 text-base mt-2">Active Crops</div>
        </div>

        {/* Total Revenue */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-blue-100 p-3 rounded-full mb-3">
            {/* Dollar SVG */}
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M12 2v20M17 7H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7"/>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">${totalRevenue.toLocaleString()}</div>
          <div className="text-gray-500 text-base mt-2">Total Revenue</div>
        </div>

        {/* Products Listed */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-orange-100 p-3 rounded-full mb-3">
            {/* Products (Box) SVG */}
            <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2"/>
              <path d="M16 8V6a4 4 0 00-8 0v2"/>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{productsListed}</div>
          <div className="text-gray-500 text-base mt-2">Products Listed</div>
        </div>

        {/* This Month Sales */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-purple-100 p-3 rounded-full mb-3">
            {/* Trend SVG */}
            <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <polyline points="4 14 10 8 14 12 20 6" />
              <path d="M20 6v6h-6"/>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">+{monthSales}%</div>
          <div className="text-gray-500 text-base mt-2">This Month Sales</div>
        </div>
      </div>
     </div>
);

export default FarmerDashboard;
