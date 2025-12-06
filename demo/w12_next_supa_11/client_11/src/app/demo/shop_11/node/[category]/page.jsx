'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_11';
import Product_11 from '../../_components/Product_11';

const FetchShopByCategory_11 = () => {
  const [shop_11, setShop_11] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category); 

  const fetchShopFromNode = async () => {
    try {
        const response = await fetch(`http://localhost:5000/api/shop_xx/${category}`);
        const data = await response.json();
        console.log('shop_11 data', data);
        if(data.length !== 0) {
            setShop_11(data);
        }
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    fetchShopFromNode();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h4 className='text-center'> Chen Yi Hao, 213410011 </h4>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
          <div className='items'>
            {shop_11?.map((item)=>{
                const { pid, pname, price, img_url } = item;
                return (
                    <Product_11 
                        key={pid} 
                        img_url={img_url}
                        pname={pname}
                        price={price}
                    />
                );    
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
 
export default FetchShopByCategory_11;