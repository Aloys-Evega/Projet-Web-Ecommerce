import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const InfoBlock = ({ title, description, image }) => (
  <div className="text-center">
    <img className="w-40 h-40 md:w-60 md:h-60 object-cover mx-auto" src={image} alt={title} />
    <h1 className="font-playfair mt-4 text-xl md:text-2xl">{title}</h1>
    <p className="font-playfair text-sm md:text-lg">{description}</p>
  </div>
);

const MenuCard = ({ name, price, originalPrice, rating, setRating, onClick }) => (
  <div
    className="card max-w-xs md:max-w-md bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img className="w-full h-40 md:h-48 object-cover" src={menuImage} alt={name} />
    <div className="p-4 md:p-6">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-4 text-center">
        {name}
      </h3>
      <div className="flex justify-center">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            onClick={() => setRating(index + 1)}
            className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-2 items-center">
        <span className="text-lg md:text-xl font-bold text-gray-800">{price} Fcfa</span>
        <span className="text-sm font-bold text-gray-800 line-through">{originalPrice} Fcfa</span>
      </div>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300">
          Commander
        </button>
      </div>
    </div>
  </div>
);

export const Hero2 = () => {
  const [rating, setRating] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOrdered, setIsOrdered] = useState(false);

  const openModal = (cardIndex) => {
    setSelectedCard(cardIndex);
    setIsOrdered(false);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setIsOrdered(false);
  };

  const handleOrderClick = () => {
    setIsOrdered(true);
  };

  return (
    <div className="my-10 relative">
      {selectedCard !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        />
      )}

      <section className="mb-8 px-4 md:px-20 lg:px-80">
        <h1 className="text-xl md:text-2xl font-noto-serif text-center">Pourquoi nous ?</h1>
        <p className="text-base md:text-lg font-noto-serif text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi adipisci quasi, id debitis animi facere eaque excepturi nobis nulla iusto ipsam quisquam sapiente et! Nisi placeat voluptatibus magnam veritatis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto max-w-4xl">
          {["Rapidité", "Qualité", "Confort"].map((title, index) => (
            <InfoBlock
              key={index}
              title={title}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              image={menuImage}
            />
          ))}
        </div>
      </section>

      <section className="font-playfair mt-20 px-4 md:px-20 lg:px-80">
        <h1 className="text-xl md:text-2xl font-noto-serif text-center">Bienvenue dans notre menu</h1>
        <p className="text-base md:text-lg font-noto-serif text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi adipisci quasi, id debitis animi facere eaque excepturi nobis nulla iusto ipsam quisquam sapiente et! Nisi placeat voluptatibus magnam veritatis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-auto max-w-4xl">
          {[...Array(6)].map((_, index) => (
            <MenuCard
              key={index}
              name="Nom du plat"
              price="19990"
              originalPrice="30000"
              rating={rating}
              setRating={setRating}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            className="fixed inset-0 z-20 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-xs md:max-w-md mx-auto font-playfair">
              <button
                className="block ml-auto px-3 py-2 bg-slate-50 text-black border font-semibold rounded hover:bg-slate-300 transition duration-300 mb-4"
                onClick={closeModal}
              >
                <FaTimes />
              </button>

              {isOrdered ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
                  <div className="text-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-4">Merci pour votre commande !</h2>
                    <p>Votre commande a été enregistrée avec succès.</p>
                  </div>
                </motion.div>
              ) : (
                <>
                  <img className="w-full h-40 md:h-48 object-cover mb-4" src={menuImage} alt="Nom du plat" />
                  <h2 className="text-xl md:text-2xl font-bold text-center mb-4 border-b mx-4">Nom du plat</h2>
                  <p className="text-base md:text-lg text-center mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fugiat tempora delectus!
                  </p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        onClick={() => setRating(index + 1)}
                        className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2 items-center mb-4">
                    <span className="text-lg md:text-xl font-bold text-gray-800">199990 Fcfa</span>
                    <span className="text-sm font-bold text-gray-800 line-through">300000 Fcfa</span>
                  </div>
                  <button
                    className="block mx-auto px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition duration-300"
                    onClick={handleOrderClick}
                  >
                    Commander
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
