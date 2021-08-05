import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCatedories] = useState([]);

  // fake get data
  useEffect(() => {
    const allCategories = [
      'all',
      ...new Set(items.map((item) => item.category)),
    ];
    setMenuItems([...items]);
    setCatedories([...allCategories]);
  }, []);

  // functions
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
}

export default App;
