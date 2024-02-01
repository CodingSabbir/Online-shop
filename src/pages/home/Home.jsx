import React from 'react';
import Banner from './Banner';
import Cetegory from './Cetegory';
import Product from './Product';
import Collection from './Collection';
import BestSeller from './BestSeller';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Cetegory/>
          <Product/>
          <Collection/>
          <BestSeller/>
        </div>
    );
};

export default Home;