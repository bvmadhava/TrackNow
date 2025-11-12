import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base lg:text-lg font-medium">
          © {new Date().getFullYear()} <span className="font-semibold">JobFlow</span>. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 mt-2">
          Helping you stay organized and in control of your job search.
        </p>
      </div>
    </footer>
  );
}
