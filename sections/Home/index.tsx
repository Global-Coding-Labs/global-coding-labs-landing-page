import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Headline3, Headline1 as HL1, Flex } from "../../styles/Components";

function GetDistanceToTheTop(domElement: any) {
  const [distance, setDistance] = useState({
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (domElement) {
      setDistance({
        top: -domElement.getBoundingClientRect().top,
        bottom: window.innerHeight - domElement.getBoundingClientRect().bottom,
        left: -domElement.getBoundingClientRect().left,
        right: window.innerWidth - domElement.getBoundingClientRect().right,
      });
    }
  }, [domElement]);

  return distance;
}

function GetElementPositionConstraints(ref: any) {
  const [element, setElement] = useState(null);
  const distance = GetDistanceToTheTop(element);

  useEffect(() => {
    const domElement = ref.current;
    if (domElement) {
      setElement(domElement);
    }
  }, [ref]);

  return distance;
}

export default function Home() {
  const smallSphereRef = useRef(null);
  const bigSphereRef = useRef(null);
  const smallSphereConstraints = GetElementPositionConstraints(smallSphereRef);
  const bigSphereConstraints = GetElementPositionConstraints(bigSphereRef);

  return (
    <Container>
      <Navbar>
        <Flex justifySpaceBetween alignCenter>
          <Logo>
            <Headline3>{"</>"}</Headline3>
          </Logo>

          <Navigation>
            <div />
            <div />
          </Navigation>
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Headline1 = styled(HL1)`
  margin-top: -0.5em;
  margin-bottom: 0.8em;
`;

const CO = styled.div`
  width: 75vw;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Container = styled(CO)`
  height: 100vh;
`;

const Navbar = styled.div`
  height: 100px;
  padding-top: 25px;
`;

const Logo = styled.div`
  color: ${(props) => props.theme.primary1};
  cursor: default;
`;

const Navigation = styled.div`
  cursor: pointer;

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
  position: fixed;
  right: 0;
  top: 15vh;

  @media (max-width: 768px) {
    height: 45vw;
    width: 45vw;
    top: 25vh;
  }
`;

const SmallSphere = styled(BigSphere)`
  width: 3vw;
  height: 3vw;
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

const Emphatize = styled.span`
  color: ${(props) => props.theme.secondary1};
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.secondary1};
  border: none;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  color: white;
  padding: 0.7em 2.5em;
  border-radius: 50px;
  cursor: pointer;
`;
