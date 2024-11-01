import React from 'react'
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';

export const Hero3 = () => {
  return (
    <div className="font-playfair px-8">
        <div>
            <h1 className=" text-2xl text-center font-playfair mb-10"> Ce que nous sommes ....</h1>
        </div>
        <div>
            <div className=" flex space-x-6 items-center mb-10">
                <div className="basis-1/2">
                    <img src={menuImage} alt="promotion" className=" w-11/12 h-52"/>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-2xl">
                        The Chicken Big Mac® is Here
                    </h1>
                    <p className="text-lg">
                        Two juicy chicken patties, special sauce, lettuce, cheese, pickles on a sesame seed bun. It’s not not a Big Mac. Get it while you can.*
                    </p>
                    <button>
                        Click here
                    </button>
                </div>
            </div>
            <div className=" flex space-x-6 items-center mb-10">
                <div className="basis-1/2">
                    <img src={menuImage} alt="promotion" className=" w-11/12 h-52"/>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-2xl">
                        The Chicken Big Mac® is Here
                    </h1>
                    <p className="text-lg">
                        Two juicy chicken patties, special sauce, lettuce, cheese, pickles on a sesame seed bun. It’s not not a Big Mac. Get it while you can.*
                    </p>
                    <button>
                        Click here
                    </button>
                </div>
            </div>
            <div className=" flex space-x-6 items-center mb-10">
                <div className="basis-1/2">
                    <img src={menuImage} alt="promotion" className=" w-11/12 h-52"/>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-2xl">
                        The Chicken Big Mac® is Here
                    </h1>
                    <p className="text-lg">
                        Two juicy chicken patties, special sauce, lettuce, cheese, pickles on a sesame seed bun. It’s not not a Big Mac. Get it while you can.*
                    </p>
                    <button>
                        Click here
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
