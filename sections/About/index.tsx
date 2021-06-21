import { useEffect } from 'react';
import styled from "styled-components";
import { motion, useAnimation } from 'framer-motion';

import { Container, Headline3 as H3 } from "../../styles/Components";

export default function About() {
  const controls = useAnimation();

  useEffect(() => {
    function handleScroll() {
      if (+this.scrollY > window.innerHeight / 2) {
        controls.start({
          opacity: 1,
          y: 0
        }, { duration: .5 });
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <Presentation initial={{ y: -50 }} animate={controls}>
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
  opacity: 0;
`;

const Rect = styled.div`
  background-color: ${props => props.theme.secondary1};
  width: .5em;
  height: 100%;
`;
