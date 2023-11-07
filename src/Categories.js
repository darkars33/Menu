import React from 'react';

const Categories = ({category, filterItems}) => {
  return <div className="btn-container">
    {category.map((category, index) =>{
      return <button className='filter-btn' id={index} onClick={() =>{
        filterItems(category);
      }}>{category}</button>
    })}
  </div>;
};

export default Categories;
