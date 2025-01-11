import React from 'react';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = () => {
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.email}</h1>
        <p className="text-gray-600">Track your learning progress</p>
      </motion.div>
      
      <button
        onClick={handleSignOut}
        className="flex items-center px-4 py-2 text-gray-700 bg-white rounded-lg shadow hover:bg-gray-50"
      >
        <LogOut className="h-5 w-5 mr-2" />
        Sign Out
      </button>
    </div>
  );
};

export default DashboardHeader;