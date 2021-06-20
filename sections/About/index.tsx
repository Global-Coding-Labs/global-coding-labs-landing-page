import styled from "styled-components";

import { Container, Headline3 as H3 } from "../../styles/Components";

export default function About() {
  return (
    <Container>
      <Presentation>
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

const Presentation = styled.div`
  margin-top: 9em;
  display: flex;
  max-height: 8em;
  height: 100%;
  /* max-height: 5em; */
  align-items: center;
`;

const Rect = styled.div`
  background-color: ${props => props.theme.secondary1};
  width: .5em;
  height: 100%;

`;
