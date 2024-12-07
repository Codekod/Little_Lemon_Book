import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-[#495E57] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-yellow-400 mb-4">
              Little Lemon
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4">Chicago</h2>
            <p className="text-lg mb-8">
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
            <Link
              to="/reservations"
              className="bg-yellow-400 text-[#495E57] px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
            <img
              src="/images/hero-image.jpg"
              alt="Featured dish at Little Lemon restaurant"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

