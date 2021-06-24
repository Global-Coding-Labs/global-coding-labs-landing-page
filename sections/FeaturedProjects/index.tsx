import styled from "styled-components";
import { useAnimation } from "framer-motion";
import Image from "next/image";

import { Container, Headline5 as H5, Headline2 } from "../../styles/Components";
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
          {/* @TODO
              1- Create red background to the phone
              2- Put the KFC project informations
          */}

          <ProjectContent>
            <ContentContainer>
              <Headline2>KFC Iceland</Headline2>

              <Headline5>
                KFC Iceland, delevoped in colaboration with the M7 is an
                ecommerce for the KFC Iceland products that aims to deliver to
                the user a big range of product modifications.
              </Headline5>
            </ContentContainer>
          </ProjectContent>

          <ImagesContainer>
            <MorthBackground>
              <ImageContainer>
                <Image
                  layout="intrinsic"
                  src={KFC}
                  alt="Phone with KFC app open"
                />
              </ImageContainer>
            </MorthBackground>
          </ImagesContainer>
        </Project>
      </Projects>
    </CustomContainer>
  );
}

const Headline5 = styled(H5)`
  margin-top: 1em;
`;

const CustomContainer = styled(Container)`
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: visible;
  margin-bottom: 0.5em;
  padding-bottom: 8em;
`;

const Header = styled.div`
  display: flex;
  height: 3em;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  width: 75vw;
  margin: 0 auto;
`;

const Projects = styled.div`
  margin-top: 4em;

  @media (max-width: 780px) {
    width: 75vw;
    align-items: center;
    margin: 0 auto;
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: 780px) {
    flex-direction: column;
    margin-top: 3em;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: calc(25vw / 2);

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 780px) {
    text-align: center;
    margin-right: 0;
  }
`;

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 9em;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: -1em;
`;

const ImageContainer = styled.div`
  margin-top: -4em;

  @media (max-width: 780px) {
    margin-top: 0;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const MorthBackground = styled.div`
  width: 40vw;
  height: 60vw;
  background-color: #ff3a43;
  border-radius: 50%;
  margin-left: -8em;
  display: block;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  max-height: 500px;

  @media (max-width: 780px) {
    display: flex;
    margin-left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(0) skewX(0);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 5em;

    & > * {
      margin-left: -16em;
    }
  }
`;
