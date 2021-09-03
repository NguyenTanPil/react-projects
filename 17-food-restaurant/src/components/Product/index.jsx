import React from 'react';
import { productData as data } from './data.js';

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>heading</ProductsHeading>
      <ProductsWrapper>
        {data.map((product, index) => {
          const { img, name, desc, price, button, alt } = product;

          <ProductCart key={index}>
            <ProductImg src={img} alt={alt} />
            <ProductInfo>
              <ProductTitle>{name}</ProductTitle>
              <ProductDesc>{desc}</ProductDesc>
              <ProductPrice>{price}</ProductPrice>
              <ProductButton>{button}</ProductButton>
            </ProductInfo>
          </ProductCart>;
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
