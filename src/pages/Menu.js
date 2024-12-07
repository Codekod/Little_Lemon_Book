import React from 'react';
import MenuCategory from '../components/MenuCategory';

const menuData = {
  appetizers: [
    { name: 'Greek Salad', description: 'Fresh vegetables, feta cheese, olives, and our house dressing.', price: '$12.99' },
    { name: 'Bruschetta', description: 'Grilled bread rubbed with garlic and topped with olive oil and salt.', price: '$7.99' },
    { name: 'Calamari', description: 'Lightly battered squid served with marinara sauce.', price: '$10.99' },
  ],
  mainCourses: [
    { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables.', price: '$18.99' },
    { name: 'Chicken Parmesan', description: 'Breaded chicken breast topped with marinara and mozzarella, served with pasta.', price: '$16.99' },
    { name: 'Vegetarian Pasta', description: 'Penne pasta with roasted vegetables in a light cream sauce.', price: '$14.99' },
  ],
  desserts: [
    { name: 'Lemon Dessert', description: 'A delightful lemon-flavored dessert that perfectly balances sweet and tart.', price: '$5.99' },
    { name: 'Tiramisu', description: 'Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.', price: '$6.99' },
    { name: 'Chocolate Mousse', description: 'Rich and creamy chocolate mousse topped with whipped cream.', price: '$5.99' },
  ],
};

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Menu</h1>
        <MenuCategory title="Appetizers" items={menuData.appetizers} />
        <MenuCategory title="Main Courses" items={menuData.mainCourses} />
        <MenuCategory title="Desserts" items={menuData.desserts} />
      </main>
    </div>
  );
}

