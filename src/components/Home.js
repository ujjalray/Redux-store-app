import React from 'react';

const Home = () => {
    return (
        <div>


            <div className='add-to-cart'>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsIxg3udym6HSN6spDaHd52gJM10D1r5IxYQ&usqp=CAU' />

            </div>


            <div className="cart-wrapper">

                <div className="img-wrapper item">
                    <img src="https://m.media-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" />
                </div>

                <div className="text-wrapper item">

                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                    
                </div>

                <div className="btn-wrapper item">
                    <button > Add To Cart</button>
                </div>


            </div>
        </div>
    );
};

export default Home;