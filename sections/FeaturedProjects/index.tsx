import styled from "styled-components";
import { useAnimation } from "framer-motion";
import Image from "next/image";

import { Container, Headline5, Headline2 } from "../../styles/Components";
import Important from "../../components/Important";
import { useHandleScroll } from "../../hooks";
import { handleScrollTo } from "../../utils";
import KFC from "../../assets/kfc-phone.png";

export default function FeaturedProjects() {
  const controls = useAnimation();

  function fadeIn() {
    controls.start(
      {
        opacity: 1,
        y: 0,
      },
      { duration: 0.5, ease: "easeIn" }
    );
  }

  useHandleScroll(handleScrollTo(3, fadeIn));

  return (
    <CustomContainer>
      <Header>
        <Important {...{ initial: { y: 20, opacity: 0 }, animate: controls }}>
          <Headline5>Featured Projects</Headline5>
        </Important>
      </Header>

      <Projects>
        <Project>
          <Heading>
            <H2 italic>KFC</H2>

            <H5 light>
              KFC Iceland, delevoped in colaboration with the M7 is an ecommerce
              for the KFC Iceland products that aims to deliver to the user a
              big range of product modifications.
            </H5>
          </Heading>

          <ImageContainer>
            <Img layout="intrinsic" src={KFC} alt="KFC app" />
          </ImageContainer>
        </Project>
      </Projects>
    </CustomContainer>
  );
}

const H2 = styled(Headline2)`
  color: white;
`;

const H5 = styled(Headline5)`
  color: white;
`;

const CustomContainer = styled(Container)`
  height: 100%;
  min-height: 100vh;
  margin-bottom: 0.5em;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0 auto;
`;

const Projects = styled.div`
  margin: 3em 0;
`;

const Project = styled.div`
  width: 100%;
  height: 40vw;
  background-color: #e8292c;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  @media (max-width: 550px) {
    height: 80vh;
    align-items: flex-start;
    justify-content: center;
    padding-top: 2em;
  }
`;

const Heading = styled.div`
  width: 50%;

  @media (max-width: 550px) {
    width: 100%;

    & > * {
      text-align: center;
    }

    h2 {
      font-size: 3.5rem;
    }

    h5 {
      font-size: 1.5rem;
    }
  }
`;

const Img = styled(Image)``;

const ImageContainer = styled.div`
  position: absolute;
  bottom: -22vw;
  right: -40vw;
  width: 50em;
  height: 40em;

  img {
    width: 20em;
  }

  @media (max-width: 950px) {
    right: -50vw;
    bottom: -28vw;

    img {
      width: 18em;
    }
  }

  @media (max-width: 800px) {
    right: -60vw;
    bottom: -40vw;

    img {
      width: 15em;
    }
  }

  @media (max-width: 800px) {
    right: -60vw;
    bottom: -45vw;
  }

  @media (max-width: 550px) {
    right: -40vw;
    bottom: -20vw;

    img {
      width: 25em;
    }
  }

  @media (max-width: 450px) {
    right: -55vw;
    bottom: -20vw;
  }

  @media (max-width: 350px) {
    right: -55vw;
    bottom: -15vw;

    img {
      width: 30em;
    }
  }
`;
