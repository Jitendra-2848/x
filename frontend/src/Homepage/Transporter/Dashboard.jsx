// FarmerDashboard.jsx
import React from 'react';

const FarmerDashboard = ({
  userName = "Mike",
  activeDeliveries = 15,
  totalDistance = 2450,
  completedJobs = 342,
  earnings = 8920
}) => (
    <div className="bg-blue-50 pt-6 px-6">
      {/* Welcome Box */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            Welcome back, {userName}! <span className="inline-block">👋</span>
          </div>
          <div className="text-gray-600 text-lg">You have {activeDeliveries} active deliveries today. Stay safe on the road!</div>
        </div>
        <div>
          <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-orange-600 transition">
            Transporter
          </button>
        </div>
      </div>

      {/* Job Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-green-100 p-3 rounded-full mb-3">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 9V7a4 4 0 014-4h10a4 4 0 014 4v2"></path>
              <rect x="3" y="10" width="18" height="11" rx="2"></rect>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{activeDeliveries}</div>
          <div className="text-gray-500 text-base mt-2">Active Deliveries</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-blue-100 p-3 rounded-full mb-3">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2v20m0 0l-7-7m7 7l7-7"></path>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{totalDistance} km</div>
          <div className="text-gray-500 text-base mt-2">Total Distance</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-yellow-100 p-3 rounded-full mb-3">
            <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">{completedJobs}</div>
          <div className="text-gray-500 text-base mt-2">Completed Jobs</div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <div className="bg-purple-100 p-3 rounded-full mb-3">
            <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 8v8m0 4v2m6-2v2M6 20v2"></path>
              <rect x="6" y="2" width="12" height="16" rx="3"></rect>
            </svg>
          </div>
          <div className="text-2xl font-bold text-gray-800">${earnings.toLocaleString()}</div>
          <div className="text-gray-500 text-base mt-2">Earnings</div>
        </div>
      </div>
      </div>
);

export default FarmerDashboard;
