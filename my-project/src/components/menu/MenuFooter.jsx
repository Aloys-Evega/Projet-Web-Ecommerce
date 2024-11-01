import React from 'react'
import menuImage from '../../assets/pexels-jenna-cederblad-2044160375-29157382.jpg';

export const MenuFooter = () => {
  return (
    <div>
        <div className="menu mt-32 font-playfair px-8">
            <div className="text ">
                <p className="text">Ready to order? Get the McDonald’s App* to place an order for Drive Thru and Curbside pickup, for your favorite McDonald's food and beverages, or order McDelivery^! Our full McDonald's menu features everything from breakfast menu items, burgers, and more! The McDonald's lunch and dinner menu lists popular favorites including the Big Mac® and our World Famous Fries®. The full menu at McDonald's has something to feed your cravings!</p>
            </div>
            <div className="card px-4 my-32  flex justify-between space-x-4 ">
            <div className="menucard basis-1/3 border">
                    <div className="image">
                        <img src={menuImage} alt="une image" className="w-full h-60" />
                    </div>
                    <div className="text px-4 my-4">
                        <h1 className="title text-xl">
                            Earn Points for Free McDonald’s
                        </h1>
                        <p className="text-lg mt-4">
                             Download the app and join MyMcDonald’s Rewards to earn bonus points on your McDonald’s orders—then, start getting fave after fave for free. *
                        </p>
                        <button  className="mt-4">
                            join now
                        </button>
                        <footer className="mt-4">
                             At participating McDonald’s. Refer to  MyMcDonald’s Program Terms for details. Must opt in to Rewards.
                        </footer>
                    </div>
                </div>
                <div className="menucard basis-1/3 border">
                    <div className="image">
                        <img src={menuImage} alt="une image" className="w-full h-60" />
                    </div>
                    <div className="text px-4 my-4">
                        <h1 className="title text-xl">
                            Earn Points for Free McDonald’s
                        </h1>
                        <p className="text-lg mt-4">
                             Download the app and join MyMcDonald’s Rewards to earn bonus points on your McDonald’s orders—then, start getting fave after fave for free. *
                        </p>
                        <button  className="mt-4">
                            join now
                        </button>
                        <footer className="mt-4">
                             At participating McDonald’s. Refer to  MyMcDonald’s Program Terms for details. Must opt in to Rewards.
                        </footer>
                    </div>
                </div>    
                <div className="menucard basis-1/3 border">
                    <div className="image">
                        <img src={menuImage} alt="une image" className="w-full h-60" />
                    </div>
                    <div className="text px-4 my-4">
                        <h1 className="title text-xl">
                            Earn Points for Free McDonald’s
                        </h1>
                        <p className="text-lg mt-4">
                             Download the app and join MyMcDonald’s Rewards to earn bonus points on your McDonald’s orders—then, start getting fave after fave for free. *
                        </p>
                        <button  className="mt-4">
                            join now
                        </button>
                        <footer className="mt-4">
                             At participating McDonald’s. Refer to  MyMcDonald’s Program Terms for details. Must opt in to Rewards.
                        </footer>
                    </div>
                </div>
                
            </div>
        
        </div>
        <footer className='mt-4 text-sm font-playfair'>
            Important Note :
            At McDonald's, we take great care to serve quality, great-tasting menu items to our customers each and every time they visit our restaurants. We understand that each of our customers has individual needs and considerations when choosing a place to eat or drink outside their home, especially those customers with food allergies. As part of our commitment to you, we provide the most current ingredient information available from our food suppliers for the nine most common allergens as identified by the U.S. Food and Drug Administration (eggs, dairy, wheat, soy, peanuts, tree nuts, fish, shellfish and sesame), so that our guests with food allergies can make informed food selections. However, we also want you to know that despite taking precautions, normal kitchen operations may involve some shared cooking and preparation areas, equipment and utensils, and the possibility exists for your food items to come in contact with other food products, including allergens. We encourage our customers with food allergies or special dietary needs to visit www.mcdonalds.com for ingredient information, and to consult their doctor for questions regarding their diet. If you have questions about our food, please reach out to us directly using our contact us forms.

            Percent Daily Values (DV) and RDIs are based on unrounded values.

            **Percent Daily Values (DV) are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.

            The nutrition information on this website is derived from testing conducted in accredited laboratories, published resources, or from information provided from McDonald's suppliers. The nutrition information is based on standard product formulations and serving sizes.  Calories for fountain beverages are based on standard fill levels plus ice. If you use the self-service fountain inside the restaurant for your drink order, see the sign posted at the beverage fountain for beverage calories without ice. All nutrition information is based on average values for ingredients and is rounded in accordance with current U.S. FDA NLEA regulations. Variation in serving sizes, preparation techniques, product testing and sources of supply, as well as regional and seasonal differences may affect the nutrition values for each product. In addition, product formulations change periodically. You should expect some variation in the nutrient content of the products purchased in our restaurants. Beverage sizes may vary in your market. McDonald’s USA does not certify or claim any of its US menu items as Halal, Kosher or meeting any other religious requirements. We do not promote any of our US menu items as vegetarian, vegan or gluten-free. This information is correct as of January 2022, unless stated otherwise.
        </footer>
    </div>
  )
}
