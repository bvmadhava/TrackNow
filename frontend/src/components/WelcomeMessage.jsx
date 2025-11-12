import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeMessage() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <img
  src="https://www.projectmanager.com/wp-content/uploads/2021/12/Project-Task-Tracker-Excel-Template.png"
  alt="Job search illustration"
  className="w-full max-w-md mx-auto mb-6 rounded shadow"
/>
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to JobFlow</h2>
      <p className="text-lg text-gray-600 mb-4">
        Track and organize all your job applications in one place. Stay on top of your job hunt with statuses, resume links, and personalized notes.
      </p>
      <p className="text-gray-500 text-base">
        To begin your journey, please{' '}
        <Link to="/login" className="text-blue-600 hover:underline font-medium">Login</Link>{' '}
        or{' '}
        <Link to="/register" className="text-blue-600 hover:underline font-medium">Register</Link>.
      </p>
    </div>
  );
}
