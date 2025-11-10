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
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-lg shadow flex flex-col items-center">
            <span className="text-xl">+</span>
            Accept New Job
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 rounded-lg shadow flex flex-col items-center">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4-4-4-4m5 4h10"></path></svg>
            View Routes
          </button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-4 px-4 rounded-lg shadow flex flex-col items-center hover:bg-gray-300">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 7v6a2 2 0 01-2 2"></path></svg>
            Active Jobs
          </button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-4 px-4 rounded-lg shadow flex flex-col items-center hover:bg-gray-300">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 10v12"></path></svg>
            Delivery History
          </button>
          <button className="bg-gray-200 text-gray-800 font-semibold py-4 px-4 rounded-lg shadow flex flex-col items-center hover:bg-gray-300">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 4V2m8 8h2M2 2v7a2 2 0 002 2h6"></path></svg>
            Fuel & Expenses
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <button className="bg-gray-200 text-gray-800 font-semibold py-4 px-4 rounded-lg shadow flex flex-col items-center hover:bg-gray-300 col-span-1">
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V4a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2z"></path></svg>
            Earnings Report
          </button>
          
        </div>
      </div>
  );
}

export default FarmerDashboard;
