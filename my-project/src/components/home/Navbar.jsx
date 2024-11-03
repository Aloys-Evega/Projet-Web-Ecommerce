import React, { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    // Définir un état pour pouvoir sélectionner grâce à un useState
    const [select, setSelected] = useState('Home');

    // Fonction pour pouvoir cliquer dessus 
    const handleSelect = (item) => {
        setSelected(item);
    };

    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);

    const toggleFlyoutMenu = () => {
        setIsFlyoutOpen(!isFlyoutOpen);
    };

    return (
        <div className="mx-11">
            <div className="nav-bar flex items-center justify-between px-8 py-4 border-b-2 font-playfair">
                <div className="flex items-center space-x-11">
                    {/* Section du logo */}
                    <div className="nav-icons">
                        <img src="" alt="this is my icon" />
                    </div>

                    {/* Section pour les boutons */}
                    <div className="nav-items flex flex-row">
                        <ul className="flex flex-row space-x-8">
                            <li className="basis-1/3 px-1 py-4">
                                <button
                                    className={`relative ${select === 'Home' ? 'text-black border-b-2' : 'text-gray-400'}`}
                                    onClick={() => handleSelect('Home')}
                                >
                                    <Link  to="/">
                                        Home
                                    </Link>
                                </button>
                            </li>
                            <li className="basis-2/3 px-1 py-4">
                                <button
                                    className={`relative ${select === 'Menu' ? 'text-black border-b-2 inline-flex items-center gap-x-1' : 'text-gray-400 inline-flex items-center gap-x-1'}`}
                                    onClick={() => {
                                        handleSelect('Menu');
                                        toggleFlyoutMenu();
                                    }}
                                >
                                    <Link to="/menu">
                                        Menu
                                    </Link>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </li>
                            <li className="basis-3/3 px-1 py-4">
                                <button
                                    className={`relative ${select === 'About' ? 'text-black border-b-2' : 'text-gray-400'}`}
                                    onClick={() => handleSelect('About')}
                                >
                                    <Link to="/parrainage">
                                        Parrainage
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section pour la partie SignIn, langue, panier */}
                <div className="flex flex-row space-x-3">

                    {/* Section utilisateur */}
                    <div className="myaccount">
                        <div className="bg-white rounded-xl shadow-md p-2 flex items-center justify-center space-x-4">
                            <FaUser className="text-gray-600" size={20} />
                            <div>
                                <button
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm p-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    id="options-menu"
                                    aria-haspopup="true"
                                >
                                    <svg
                                        className="p-0 h-5 w-5"
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

                    {/* Flyout Menu */}
                    {isFlyoutOpen && (
                        <div className="absolute px-8 left-0 top-24 w-full bg-white text-black">
                            <div className="container mx-auto py-8 grid grid-cols-6 gap-4">
                                <div className="col-span-1">
                                    <h4 className="text-lg font-semibold mb-2">Boissons</h4>
                                    <ul>
                                        <li className="hover:text-gray-300"><a href="#">Sodas</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Jus</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Cocktails</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Eaux</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-lg font-semibold mb-2">Salades</h4>
                                    <ul>
                                        <li className="hover:text-gray-300"><a href="#">Salade César</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Salade Grecque</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Salade Verte</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Salade Niçoise</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-lg font-semibold mb-2">Nourriture</h4>
                                    <ul>
                                        <li className="hover:text-gray-300"><a href="#">Pâtes</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Pizza</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Burgers</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Grillades</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-lg font-semibold mb-2">Desserts</h4>
                                    <ul>
                                        <li className="hover:text-gray-300"><a href="#">Tarte</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Glaces</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Gâteau</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Crêpes</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-lg font-semibold mb-2">Spécialités</h4>
                                    <ul>
                                        <li className="hover:text-gray-300"><a href="#">Cuisine Africaine</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Cuisine Asiatique</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Cuisine Italienne</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Cuisine Française</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-1">
                                    <h4 className="text-lg font-semibold mb-2">Extras</h4>
                                    <ul>
                                        <li className="hover:text-gray-300"><a href="#">Frites</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Sauces</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Salade d'Accompagnement</a></li>
                                        <li className="hover:text-gray-300"><a href="#">Pain</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
