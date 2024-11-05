import React from 'react';
import restaurantImage from '../../assets/pexels-pixabay-262978.jpg';

export const Hero = () => {
  return (
    <div className="p-4 m-4">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="section1 md:basis-1/2 text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-noto-serif">Bienvenue dans notre page de delivery</h1>
          <p className="text-base md:text-lg font-noto-serif mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui molestiae officia commodi aperiam ad nostrum mollitia, sequi ratione iure eum molestias nesciunt rem harum eos dolor? Molestias, dolorum. Minima!
          </p>
        </div>
        <div className="section2 md:basis-1/2 flex items-center">
          <img src={restaurantImage} alt="image de tchop et Yamo" className="w-64 h-64 md:w-80 md:h-80 mx-auto" />
        </div>
      </div>
    </div>
  );
}
