import Navbar from '../Navbar';
import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroText,
  HeroTitle,
} from './HeroStyles';

function Hero() {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroTitle>greatest food ever</HeroTitle>
          <HeroText>Ready in 60 seconds</HeroText>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
