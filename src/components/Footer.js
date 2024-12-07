import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="/images/footer-logo.png"
            alt="Little Lemon logo"
            className="mb-4 w-24 h-24"
          />
          <h3 className="text-gray-800 font-serif text-xl mb-2">LITTLE LEMON</h3>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Document Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            <li><Link to="/menu" className="text-gray-600 hover:text-gray-900">Menu</Link></li>
            <li><Link to="/reservations" className="text-gray-600 hover:text-gray-900">Reservations</Link></li>
            <li><Link to="/order" className="text-gray-600 hover:text-gray-900">Order Online</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">123 Main St, Chicago, IL</li>
            <li className="text-gray-600">(555) 123-4567</li>
            <li className="text-gray-600">info@littlelemon.com</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4">Social Media Links</h3>
          <ul className="space-y-2">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

