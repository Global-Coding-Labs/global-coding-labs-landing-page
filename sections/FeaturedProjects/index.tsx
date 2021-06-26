import styled from "styled-components";
import { motion, useAnimation, AnimationControls } from "framer-motion";

import { Container, Headline5, Headline2 } from "../../styles/Components";
import Important from "../../components/Important";
import { useHandleScroll } from "../../hooks";
import { handleScrollTo } from "../../utils";
import ProjectKFC from './ProjectKFC';

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

  useHandleScroll(handleScrollTo(3.8, fadeIn));

  return (
    <CustomContainer>
      <Header>
        <Important {...{ initial: { y: 20, opacity: 0 }, animate: controls }}>
          <Headline5>Featured Projects</Headline5>
        </Important>
      </Header>

      <Projects>
        <ProjectKFC />
      </Projects>
    </CustomContainer>
  );
}

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