import React, { useState } from 'react';
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const PromotionCard = ({ title, description, buttonText }) => {
  return (
    <div className="flex mb-10 mx-20 p-4 border rounded-lg shadow-lg bg-white">
      <div className="w-24 h-24">
        <img src={menuImage} alt="promotion" className="rounded-lg" />
      </div>
      <div className="pl-4">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          {buttonText}
        </button>
      </div>
    </div>

    // <motion.div 
    //   className="flex space-x-8 overflow-hidden" 
    //   animate={{ x: ['100%', '-100%'] }} // Animation horizontale de droite à gauche
    //   transition={{ duration: 20, ease: 'linear', repeat: Infinity }} // Durée et répétition
    // >
    //   {comments.map((comment, index) => (
    //     <div key={index} className="mx-4 my-2 text-center border p-2 rounded-lg shadow">
    //       <div className="flex justify-center mb-2">
    //         {[...Array(5)].map((_, starIndex) => (
    //           <FontAwesomeIcon
    //             key={starIndex}
    //             icon={faStar}
    //             onClick={() => setRating(starIndex + 1)} // Définit la note sélectionnée
    //             className={`cursor-pointer ${starIndex < rating ? 'text-yellow-500' : 'text-gray-300'}`}
    //           />
    //         ))}
    //       </div>
    //       <p className="text-lg italic">"{comment.text}"</p>
    //       <span className="font-semibold">{comment.author}</span>
    //     </div>
    //   ))}
    // </motion.div>
  );
};

// Composant pour afficher les commentaires
const CommentsSection = ({ rating, setRating }) => {
  const comments = [
    { text: "J'avais faim, j'ai été rassasié !", author: "Marie Vianney" },
    { text: "Un service impeccable et des plats délicieux !", author: "Azemkouo Tony" },
    { text: "Je reviendrai sans aucun doute, un vrai régal !", author: "Audrey" },
    { text: "Une expérience culinaire unique, à ne pas manquer.", author: "Solange" },
    { text: "Les meilleurs burgers que j'ai jamais goûtés !", author: "Soumegne Ange" },
    { text: "Comme un affames rempli je rentre heureux", author: "Aloys Essomba" },
    { text: "jai pas les mots !", author: "Evega Stephane" },
    { text: "Allez y manger deguster consommer !", author: "Moute A Moute" },
    { text: "Une meilleurs approches", author: "Elie Njock" },
  ];

  return (

    <div className="flex flex-wrap justify-center my-4">
      {comments.map((comment, index) => (
        <div key={index} className="mx-4 my-2 text-center border p-2 rounded-lg shadow">
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, starIndex) => (
              <FontAwesomeIcon
                key={starIndex}
                icon={faStar}
                onClick={() => setRating(starIndex + 1)} // Définit la note sélectionnée
                className={`cursor-pointer ${starIndex < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-lg italic">"{comment.text}"</p>
          <span className="font-semibold">{comment.author}</span>
        </div>
      ))}
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
        <div className="image my-7 flex justify-center items-center">
          <div className="text">
            <CommentsSection rating={rating} setRating={setRating} />
          </div>
        </div>
      </div>
    </div>
  );
};
