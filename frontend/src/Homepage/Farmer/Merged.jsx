// FarmerDashboard.jsx
import React from 'react';
import Recent from './Recent.jsx';
import Navbar from './Navbar.jsx';
import Dashboard from './Dashboard.jsx';
import QuickActions from './QuickActions.jsx';

const FarmerDashboard = () => {
  return (
    <div className='h-screen '>
      <div>
      <Navbar />
      </div>
      <div>
      <Dashboard />
      </div>
      <div>
      <QuickActions />
      </div>
      <div>
      <Recent />
      </div>
    </div>
  );
};

export default FarmerDashboard;
