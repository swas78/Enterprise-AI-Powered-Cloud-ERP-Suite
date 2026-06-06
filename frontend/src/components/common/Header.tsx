import React from 'react';

export const Header: React.FC = () => {

  return (
    <header className="flex justify-between items-center w-full px-lg h-[48px] z-30 bg-surface border-b border-outline-variant sticky top-0">
      <div className="flex items-center gap-lg flex-1">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">AMDOX</h1>
        <div className="relative w-full max-w-md hidden md:block">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-[20px]">search</span>
          <input 
            className="w-full bg-surface-container-low border border-outline-variant rounded px-10 py-1 text-body-md focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" 
            placeholder="Search accounts (CMD+K)..." 
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-md">
        <div className="flex items-center gap-xs">
          <button className="p-2 text-primary hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-primary hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined">help</span>
          </button>
          <button className="p-2 text-primary hover:bg-surface-container-low rounded-full transition-colors active:scale-95 duration-150">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_done</span>
          </button>
        </div>
        <div className="h-6 w-px bg-outline-variant mx-xs"></div>
        <div className="flex items-center gap-sm cursor-pointer hover:bg-surface-container-low p-xs rounded transition-colors">
          <img 
            alt="User profile" 
            className="w-8 h-8 rounded-full border border-outline-variant object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFWWqVXd7a7a6aRgXub_Mv3_H02GbD-F7gcL7d9_vChtfPLuIpgfDFJL8lswI8aiKcBGIY2ooMkBvVF3j3PN01ugOh7TkeJUgH1LCkg6ySWn7f_FrGppP9lQA01dxw1gm9e-pVYeleqoZlhjbhAjZt76Bql1LSE8ZuhuUMMVzwk9LQHp6a_KwNTgxOOVN4CS6pYxpCOGDGr2QV9dr92Q9t9IqkI_i2DQT53x1SDpZVwZvMAkNdyCW0IDQLE8hUg8nqNc_-l_G7b-Q"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
