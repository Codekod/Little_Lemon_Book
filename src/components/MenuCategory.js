import React from 'react';

export default function MenuCategory({ title, items }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <span className="text-lg font-bold text-green-600">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

