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

     
    </CustomContainer>
  );
}

const Headline5 = styled(H5)`
  padding: .3em 0;
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
