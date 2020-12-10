import VideoBackground from "../VideoBackground";
import {
  HomeContainer,
  HeroWrapper,
  HeroSection,
  HeroHeading,
  HeroPara,
  HeroEnjoy,
} from "./HomeElements";

export default function Home(props) {
  return (
    <HomeContainer>
      <HeroWrapper>
        <HeroSection>
          <HeroHeading>
            Can't move on from the asian   dramas you have watched?
          </HeroHeading>
          <HeroEnjoy>Come here and enjoy!</HeroEnjoy>
          {/* <HeroPara>
            Gwen needs a data form, then, that can contain both strings and
            numbers and somehow keep the information separate.Gwen needs a data
            form, then, that can contain both strings and numbers and somehow
            keep the information separate.
          </HeroPara> */}
        </HeroSection>
      </HeroWrapper>
      <VideoBackground />
    </HomeContainer>
  );
}
