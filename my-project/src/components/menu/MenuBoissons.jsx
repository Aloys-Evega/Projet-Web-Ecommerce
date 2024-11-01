import React from 'react';
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';

const MenuCard = ({ title, button1Text, button2Text }) => {
  return (
    <div className="card justify-center border mx-4 hover:bg-slate-300">
      <div className="image mx-4 my-2 flex justify-center">
        <img src={menuImage} alt={title} className="w-60 h-60" />
      </div>
      <div className="text-center">
        <p>{title}</p>
      </div>
      <div className="flex justify-center space-x-4 my-2">
        <button className="border p-1">{button1Text}</button>
        <button className="border p-1">{button2Text}</button>
      </div>
    </div>
  );
};

const MenuBoissons = () => {
  return (
    <div className="mt-8 font-playfair">
      <div className="section1">
        <div className="part1">
          <h1 className="text-2xl text-center">Juice's Menu</h1>
        </div>
        <div className="part2">
          <p className="text-lg text-center">Featured Favorites</p>
        </div>
      </div>
      <div className="section2">
        <div className="grid grid-cols-4 gap-4 mt-10">
          {Array(12).fill().map((_, index) => (
            <MenuCard
              key={index}
              title={`Un titre bizarre là ${index + 1}`}
              button1Text="aloys"
              button2Text="Marie"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuBoissons;
