import React from 'react'
import restaurantImage from '../../assets/pexels-pixabay-262978.jpg';

export const Hero = () => {
  return (
    <div>
        <div className=" flex  items-center p-4 m-4 space-x-8">
            <div className="section1 basis-1/2">
                <h1 className='text-2xl text-center font-noto-serif'>Bienvenue dans notre page de delivery</h1>
                <p className='text-lg text-center font-noto-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui molestiae officia commodi aperiam ad nostrum mollitia, sequi ratione iure eum molestias nesciunt rem harum eos dolor? Molestias, dolorum. Minima!</p>
            </div>
            <div className="section2 basis-1/2 flex items-center">
                <img src={restaurantImage} alt="image de tchop et Yamo" className="w-80 h-80 mx-auto "/>
            </div>
        </div>
    </div>
  )
}
