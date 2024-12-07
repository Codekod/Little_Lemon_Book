import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Little Lemon logo"
              className="w-auto h-8"
            />
            <span className="text-gray-800 font-serif">LITTLE LEMON</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link to="/menu" className="text-gray-600 hover:text-gray-900">Menu</Link>
          <Link to="/reservations" className="text-gray-600 hover:text-gray-900">Reservations</Link>
          <Link to="/order" className="text-gray-600 hover:text-gray-900">Order Online</Link>
          <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        </div>
      </div>
    </nav>
  );
}

