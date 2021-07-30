import { useRef } from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import {
  Headline3,
  Headline1 as HL1,
  Flex,
  Container,
  Emphatize,
  Button,
} from "../../styles/Components";
import { useGetElementPositionConstraints } from "../../hooks";
import { useStore } from "../../state";

export default function Home() {
  const { dispatch, state } = useStore();
  const smallSphereRef = useRef(null);
  const bigSphereRef = useRef(null);
  const smallSphereConstraints =
    useGetElementPositionConstraints(smallSphereRef);
  const bigSphereConstraints = useGetElementPositionConstraints(bigSphereRef);

  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, -200]);

  return (
    <Container>
      <Navbar
        initial={{ x: 300, y: -300 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.1, ease: [0.1, 0.6, 0.6, 0.01] }}
      >
        <Flex justifySpaceBetween alignCenter>
          <Logo>
            <Headline3>{"</>"}</Headline3>
          </Logo>

          {/* <Navigation
            onMouseOver={() => {
              dispatch({ type: "CHANGE_CURSOR_STATE", payload: "focus" });
            }}
            onMouseLeave={() => {
              dispatch({ type: "CHANGE_CURSOR_STATE", payload: "default" });
            }}
          >
            <div />
            <div />
          </Navigation> */}
        </Flex>
      </Navbar>

      <Hero>
        <Flex column justifyCenter>
          <SmallSphere1
            ref={smallSphereRef}
            drag
            dragConstraints={{
              top: smallSphereConstraints.top,
              left: smallSphereConstraints.left,
              right: smallSphereConstraints.right,
              bottom: smallSphereConstraints.bottom,
            }}
            initial={{ x: 200, y: -300 }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.1, ease: [0.1, 0.6, 0.6, 0.01] }}
            style={{ position: "absolute", top: y }}
          />

          <Heading>
            <Headline1>
              <Emphatize>We build</Emphatize> websites,{"\n"} apps and systems
            </Headline1>

            <Button>contact us</Button>
          </Heading>
          <BigSphere
            ref={bigSphereRef}
            drag
            dragConstraints={{
              top: bigSphereConstraints.top,
              left: bigSphereConstraints.left,
              right: bigSphereConstraints.right,
              bottom: bigSphereConstraints.bottom,
            }}
            initial={{ x: 300, y: -300 }}
            animate={{ x: 0, y: 0 }}
            transition={{ delay: 0.1, ease: [0.1, 0.6, 0.6, 0.01] }}
            style={{ position: "absolute", top: y }}
          />
        </Flex>
      </Hero>
    </Container>
  );
}

const Heading = styled.div`
  width: 80%;
  user-select: none;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Headline1 = styled(HL1)`
  margin-top: -0.5em;
  margin-bottom: 0.8em;
`;

const Navbar = styled(motion.div)`
  height: 100px;
`;

const Logo = styled.div`
  color: ${(props) => props.theme.primary1};
  z-index: 2;
`;

const Navigation = styled.div`
  z-index: 2;

  & > div {
    background-color: ${(props) => props.theme.primary1};
    height: 0.6em;
    width: 2.3em;

    &:last-child {
      margin-top: 0.2em;
    }
  }
`;

const BigSphere = styled(motion.div)`
  display: block;
  height: 38vw;
  width: 38vw;
  background-image: radial-gradient(
    at 0%,
    ${(props) => props.theme.secondary3},
    ${(props) => props.theme.primary2}
  );
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 15vh;
  box-shadow: 5px 5px 20px ${(props) => props.theme.secondary3};
  transition: 0.01s ease-in;
  transition-property: width, height;

  @media (max-width: 768px) {
    height: 45vw;
    width: 45vw;
    top: 25vh;
  }
`;

const SmallSphere = styled(BigSphere)`
  width: 3vw;
  height: 3vw;
  z-index: 2;
`;

const SmallSphere1 = styled(SmallSphere)`
  top: 20vh;
  right: 50vw;

  @media (max-width: 768px) {
    height: 4vw;
    width: 4vw;
    top: 30vh;
  }
`;

const Hero = styled.div`
  height: 80vh;
`;
