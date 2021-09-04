import React from 'react';
import {
  ProductButton,
  ProductCart,
  ProductContainer,
  ProductDesc,
  ProductHeading,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from './ProductsStyles.js';

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          const { img, name, desc, price, button, alt } = product;

          return (
            <ProductCart key={index}>
              <ProductImg src={img} alt={alt} />
              <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductDesc>{desc}</ProductDesc>
                <ProductPrice>{price}</ProductPrice>
                <ProductButton>{button}</ProductButton>
              </ProductInfo>
            </ProductCart>
          );
        })}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;
