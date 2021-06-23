import styled from "styled-components";
import { useAnimation } from "framer-motion";
import Image from 'next/image';

import { Container, Headline5 } from "../../styles/Components";
import Important from "../../components/Important";
import { useHandleScroll } from "../../hooks";
import { handleScrollTo } from "../../utils";
import KFCBackground from '../../assets/morph.svg';
import KFC from '../../assets/kfc-phone.png';

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

          <KFCPhone layout="intrinsic" src={KFC} alt="Phone with KFC app open"  />

        </Project>

      </Projects>
    </CustomContainer>
  );
}

const CustomContainer = styled(Container)`
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: visible;
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

`;

const Project = styled.div`
  position: relative;
`;

const KFCPhone = styled(Image)`
  height: 10em;
  width: 10em;
  position: absolute;
  left: -400px;
`;