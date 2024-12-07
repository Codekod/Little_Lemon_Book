import React from 'react';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <FeaturedDishes />
      </main>
    </div>
  );
}

