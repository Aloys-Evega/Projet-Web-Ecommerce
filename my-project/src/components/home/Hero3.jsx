import React, { useState } from 'react';
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const PromotionCard = ({ title, description, buttonText }) => {
  return (
    <div className="flex  mb-10 mx-20 p-4 border rounded-lg shadow-lg bg-white">
      <div className="w-24 h-24">
        <img src={menuImage} alt="promotion" className="rounded-lg " />
      </div>
      <div className=" pl-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

// Composant Hero3 refactorisé
export const Hero3 = () => {
  const [rating, setRating] = useState(0); // État pour la note

  return (
    <div className="font-playfair px-8">
      <div>
        <h1 className="text-2xl text-center font-playfair mb-10">Nos Engagements</h1>
        <PromotionCard 
          title="Savourez le Burger au Poulet!" 
          description="Deux délicieux filets de poulet, sauce spéciale, laitue, fromage, et cornichons sur un pain au sésame. Ne le manquez pas!" 
          buttonText="Découvrez-le ici" 
        />
        <PromotionCard 
          title="Essayez notre Burger Gourmet!" 
          description="Un mélange parfait de saveurs avec des ingrédients frais et de qualité. C'est un vrai délice!" 
          buttonText="Cliquez pour plus" 
        />
        <PromotionCard 
          title="Ne manquez pas notre Offre Spéciale!" 
          description="Profitez de notre offre limitée sur le menu, avec des plats qui vous feront craquer!" 
          buttonText="Obtenez votre offre" 
        />
      </div>
      <div>
        <h2 className="text-2xl text-center">Ce qu'ils pensent de nous</h2>
        <div className="image border my-7 flex justify-center items-center">
          <img 
            src={menuImage}
            alt="photo d'une personne" 
            className="w-24 h-24 rounded-full border my-4" 
          />
          <div className="text">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  onClick={() => setRating(index + 1)} // Définit la note sélectionnée
                  className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span>J'avais faim, j'ai été rassasié !</span>
            <span className="mt-4">Marie Vianney</span>
          </div>
        </div>
      </div>
    </div>
  );
};
