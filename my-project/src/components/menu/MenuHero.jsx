import React from 'react';
import { Navbar } from '../home/Navbar';
import meal from '../../assets/meal.png';
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';

// Composant pour afficher chaque carte
const Card = ({ title, button1Text, button2Text }) => {
  return (
    <div className="card1 justify-center basis-1/4 border mx-2 hover:bg-slate-300">
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

// Composant principal
const MenuHero = () => {
  const staffMembers = ['Tony', 'Elie', 'Elie', 'Elie', 'Elie', 'Elie', 'Elie'];
  
  return (
    <div>
      <Navbar />
      <div className="menuhero flex space-x-4 mt-8 font-playfair">
        <div className="section basis-1/4 border-2 p-4">
          <div className="part1 border-2 my-4 flex space-x-3 p-4">
            <div className="image">
              <img src={meal} alt="image logo" className="w-8 h-8" />
            </div>
            <div className="text">
              <p>{staffMembers[0]}</p>
            </div>
          </div>
          <div className="part2 border-2 my-4 p-4">
            {staffMembers.slice(1).map((name, index) => (
              <div className="section1 flex space-x-3 p-4" key={index}>
                <div className="image">
                  <img src={meal} alt="image logo" className="w-8 h-8" />
                </div>
                <div className="text">
                  <p>{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section2 basis-3/4">
          <div className="section1 text-center mb-4">
            <h1 className="text-2xl">McDonald's Menu</h1>
            <p className="text-lg">Featured Favorites</p>
          </div>
          <div className="section2 grid grid-cols-3 gap-4">
            {Array(6).fill().map((_, index) => (
              <Card
                key={index}
                title={`Un titre bizarre là ${index + 1}`}
                button1Text="aloys"
                button2Text="Marie"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHero;
