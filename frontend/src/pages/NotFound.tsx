import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 text-center">
      <h2 className="text-4xl font-extrabold text-white">404 - Page Not Found</h2>
      <p className="text-sm text-[var(--text-secondary)]">The requested module does not exist or has not been deployed yet.</p>
      <Link 
        to="/" 
        className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-xs rounded-lg transition-all duration-200 hover:opacity-90"
      >
        Return to Executive BI
      </Link>
    </div>
  );
};

export default NotFound;
