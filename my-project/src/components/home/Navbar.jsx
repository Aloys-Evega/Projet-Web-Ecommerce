import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';


export const Navbar = () => {

    // definir un etat pour pouvoir selectionner grace a un useState
    const [select, setSelected] = useState('Home')

    // Fonction pour pouvoir cliquer dessus 
    const handleSelect = (item) =>{
        setSelected(item);
    }; 


  return (
    <div className="mx-11">
        <div className="nav-bar flex items-center justify-between  px-8 py-4 border-b-2 font-playfair">
             
           <div className="flex items-center space-x-11">
                 {/* ici c'est la section du logo de la société probablement Tchope et yamo */}
                <div className="nav-icons">
                    <img src="" alt='this is my icon'/>
                </div>

                {/* ici c'est la section pour les boutons  */}
                <div className="nav-items flex flex-row">
                    <ul className="flex flex-row space-x-8">
                        <li className="basis-1/3 px-1 py-4">
                            <button
                            className={`relative ${select === 'Home' ? 'text-black border-b-2' : 'text-gray-400'}`}
                            onClick={() => handleSelect('Home')}
                            >
                                Home
                            </button>
                        </li>
                        <li className="basis-2/3 px-1 py-4">
                            <button
                            className={`relative ${select === 'Menu' ? 'text-black border-b-2' : 'text-gray-400'}`}
                            onClick={() => handleSelect('Menu')}
                            >
                                Menu
                            </button>
                        </li>
                        <li className="basis-3/3 px-1 py-4">
                            <button
                            className={`relative ${select === 'About' ? 'text-black border-b-2' : 'text-gray-400'}`}
                            onClick={() => handleSelect('About')}
                            >
                                About
                            </button>
                        </li>
                        
                    </ul>
                </div>
           </div>

            {/* ici c'est la section pour la partie signIn, langue, panier */}
            <div className=" flex flex-row space-x-3">

                {/* dans cette partie en cliquent sur ce bouton on aura accès au information de son utilisateur */}
                <div className="myaccount">
                    <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center space-x-4">
                        <FaUser className="text-gray-600" size={20} /> 
                        <div className="div">
                        <button
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="options-menu"
                        aria-haspopup="true"
                        >
                            <svg
                            className=" p-0 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            />
                            </svg>
                        </button>
                        </div>
                    </div>
                </div>

                

                {/* dans cette partie en cliquant sur ce bouton on aura accès au panier */}
                <div className="monpanier">
                    
                </div>
                

            </div>

        </div>
    </div>
  )
}
