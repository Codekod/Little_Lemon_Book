import React from 'react';

const dishes = [
  {
    id: 1,
    name: 'Greek Salad',
    description: 'Fresh vegetables, feta cheese, olives, and our house dressing.',
    price: '$12.99',
    image: '/images/greek-salad.jpg'
  },
  {
    id: 2,
    name: 'Bruschetta',
    description: 'Grilled bread rubbed with garlic and topped with olive oil and salt.',
    price: '$7.99',
    image: '/images/bruschetta.jpg'
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    description: 'A delightful lemon-flavored dessert that perfectly balances sweet and tart.',
    price: '$5.99',
    image: '/images/lemon-dessert.jpg'
  }
];

export default function FeaturedDishes() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Dishes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">{dish.price}</span>
                  <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded hover:bg-yellow-500 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

