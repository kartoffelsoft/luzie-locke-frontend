import React from 'react';
import ItemList from '../components/ItemList';

import styles from './ItemBoard.module.scss';

const DUMMY_ITEMS = [
  {
    id: 'p1',
    title: "Dish washer with exellent condition. Almost unused",
    location: 'Kronberg',
    price: '€34',
    description: 'One of the most famous sky scrapers in the world!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14Zp5IIswNKJwidGYLbJ8ZS9yn0_vlPvEXA&usqp=CAU',
    selller: 'Harry'
  },
  {
    id: 'p2',
    title: 'New building for sale',
    location: 'Eschborn',
    price: '€3',
    description: 'One of the most famous sky scrapers in the world!',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    selller: 'Jumg',
  },
  {
    id: 'p3',
    title: '4 years old Nikon camera',
    location: 'Eschborn',
    price: '€92',
    description: 'One of the most famous sky scrapers in the world!',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShPW0Ii450yCBRM7w7mUZvOk_NKbOpluT9Q&usqp=CAU',
    address: '20 W 34th St, New York, NY 10001',
    selller: 'Jumg'
  }
]

const ItemBoard = () => {
  return (
    <div className={styles.container}>
      <ItemList items={DUMMY_ITEMS} />
    </div>
  );
};

export default ItemBoard;
