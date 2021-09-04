import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: #150f0f;
  color: #fff;
  min-height: 100vh;
  padding: 8rem calc((100vw - 130rem) / 2);
  width: 100%;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCart = styled.div`
  line-height: 2;
  margin: 0 3.2rem;
  width: 30rem;
`;

export const ProductImg = styled.img`
  box-shadow: 0.8rem 0.8rem #fdc500;
  height: 30rem;
  max-width: 100vw;
  min-width: 30rem;
`;

export const ProductHeading = styled.h2`
  font-size: clamp(3.2rem, 2.5vw, 4.8rem);
  margin-bottom: 8rem;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 2.4rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3.2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

export const ProductPrice = styled.p`
  font-size: 3.2rem;
  margin-bottom: 1.6rem;
`;

export const ProductButton = styled.button`
  background-color: #e31837;
  border: none;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.6rem 6.4rem;
  transition: all 0.2s linear;

  &:hover {
    background-color: #ffc500;
    cursor: pointer;
    color: #000;
  }
`;
