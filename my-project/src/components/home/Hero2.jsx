import React from 'react'
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';

export const Hero2 = () => {
  return (
    <div className="my-10">
        <div className="section1">
            <h1 className=" text-2xl font-noto-serif text-center">Bienvenue dans notre menu </h1>
            <p className=" text-lg font-noto-serif text-center px-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti commodi adipisci quasi, id debitis animi facere eaque excepturi nobis nulla iusto ipsam quisquam sapiente et! Nisi placeat voluptatibus magnam veritatis.</p>
        </div>
        <div className="section2 flex justify-center my-10 mx-310">
            <div className="card1 justify-center basis-1/3 border mx-20  hover:bg-slate-300 ">
                <div className="image mx-4 my-2 flex justify-center">
                    <img src= {menuImage} alt="marie" className=" w-60 h-60" />
                </div>
                <div className="text-center">
                    <p>Un titre bizzare la </p>
                </div>
                <div className=" flex justify-center space-x-4 my-2">
                    <button className="border p-1">aloys</button>
                    <button className="border p-1">Marie</button>
                </div>
            </div>
            <div className="card1 justify-center basis-1/3 border mx-20">
                <div className="image mx-4 my-2 flex justify-center">
                    <img src={menuImage} alt="marie" className=" w-60 h-60" />
                </div>
                <div className="text-center">
                    <p>Un titre bizzare la </p>
                </div>
                <div className=" flex justify-center space-x-4 my-2">
                    <button className="border p-1">aloys</button>
                    <button className="border p-1">Marie</button>
                </div>
            </div>
            <div className="card1 justify-center basis-1/3 border mx-20">
                <div className="image mx-4 my-2 flex justify-center">
                    <img src={menuImage} alt="marie" className=" w-60 h-60" />
                </div>
                <div className="text-center">
                    <p>Un titre bizzare la </p>
                </div>
                <div className=" flex justify-center space-x-4 my-2">
                    <button className="border p-1">aloys</button>
                    <button className="border p-1">Marie</button>
                </div>
            </div>

        </div>
    </div>
  )
}
