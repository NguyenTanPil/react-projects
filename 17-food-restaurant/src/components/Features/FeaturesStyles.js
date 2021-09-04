import styled from 'styled-components';
import FeaturePic from '../../images/product-3.jpg';
import { ProductButton } from '../Product/ProductsStyles';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  max-height: 50rem;
  padding: 0 1.6rem;
  text-align: center;

  h2 {
    font-size: clamp(4.8rem, 5vw, 8rem);
    margin-bottom: 1.6rem;
  }

  p {
    font-size: clamp(1.6rem, 3vw, 3.2rem);
    margin-bottom: 1.6rem;
  }
`;

export const FeatureButton = styled(ProductButton)`
  color: #000;
  background-color: #ffc500;

  &:hover {
    color: #fff;
    background-color: #e31837;
  }
`;
