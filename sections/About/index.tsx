import React from "react";
import styled from "styled-components";
import { useAnimation } from "framer-motion";

import { Container, Headline3 as H3 } from "../../styles/Components";
import { useHandleScroll } from "../../hooks";
import { handleScrollTo } from "../../utils";
import Important from "../../components/Important";

export default function About() {
  const controls = useAnimation();

  function fadeout() {
    controls.start(
      {
        opacity: 1,
        y: 0,
      },
      { duration: 0.5 }
    );
  }

  useHandleScroll(handleScrollTo(2, fadeout));

  return (
    <Container>
      <Important {...{ initial: { y: -50 }, animate: controls }}>
        <Headline3>
          Global Coding Labs is a software development start up known for build
          modern and innovative software
        </Headline3>
      </Important>
    </Container>
  );
}

const Headline3 = styled(H3)`
  font-style: italic;
  font-weight: normal;
`;
