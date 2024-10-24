import React, { useState } from 'react';
import Items from './Components/Data';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import './App.css';

const allCategories = ['all', ...new Set(Items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(Items);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
