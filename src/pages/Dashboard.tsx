import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SubjectsGrid from '../components/dashboard/SubjectsGrid';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DashboardHeader />
        <SubjectsGrid />
      </div>
    </div>
  );
};

export default Dashboard;