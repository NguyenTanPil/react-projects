import React from 'react';
import { FeatureButton, FeatureContainer } from './FeaturesStyles';

const Features = () => {
  return (
    <FeatureContainer>
      <h2>Pizza of day</h2>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order now</FeatureButton>
    </FeatureContainer>
  );
};

export default Features;
