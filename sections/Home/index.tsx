import styled from "styled-components";
import { Headline3, Headline1 as HL1, Flex } from "../../styles/Components";

export default function Home() {
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
          <BigSphere />
          <SmallSphere1 />

          <Heading>
            <Headline1>
              <Emphatize>We build</Emphatize> websites,{"\n"} apps and systems
            </Headline1>

            <Button>contact us</Button>
          </Heading>
        </Flex>
      </Hero>
    </Container>
  );
}

const Heading = styled.div`
  width: 80%;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const Headline1 = styled(HL1)`
  margin-top: -.5em;
  margin-bottom: .8em;
`;

const CO = styled.div`
  width: 75vw;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  @media(max-width: 768px) {
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
    height: .6em;
    width: 2.3em;

    &:last-child {
      margin-top: .2em;
    }
  }
`;

const BigSphere = styled.div`
  display: block;
  height: 38vw;
  width: 38vw;
  background-image: radial-gradient(
    at 70%,
    ${(props) => props.theme.secondary3},
    ${(props) => props.theme.primary2}
  );
  border-radius: 100%;
  transform: rotate(200deg);
  position: absolute;
  right: 0;
  top: 15vh;
  z-index: -1;

  @media(max-width: 768px) {
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

  @media(max-width: 768px) {
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
  padding: .7em 2.5em;
  border-radius: 50px;
  cursor: pointer;
`;
