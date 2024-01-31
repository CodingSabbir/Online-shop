import React from 'react';
import Banner from './Banner';
import Cetegory from './Cetegory';
import Product from './Product';
import Collection from './Collection';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Cetegory/>
          <Product/>
          <Collection/>
        </div>
    );
};

export default Home;