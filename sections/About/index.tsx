import { useEffect } from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import { Container, Headline3 as H3 } from "../../styles/Components";

export default function About() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.9], [100, 0]);
  
  return (
    <Container>
      <Presentation style={{ opacity, position: 'absolute', top: y }}>
        <Rect />
        <Headline3>
          Global Coding Labs is a software development start up known for build
          modern and innovative software
        </Headline3>
      </Presentation>
    </Container>
  );
}

const Headline3 = styled(H3)`
  font-style: italic;
  font-weight: normal;
  margin-left: .5em;
`;

const Presentation = styled(motion.div)`
  margin-top: 9em;
  display: flex;
  max-height: 8em;
  height: 100%;
  align-items: center;
`;

const Rect = styled.div`
  background-color: ${props => props.theme.secondary1};
  width: .5em;
  height: 100%;

`;
