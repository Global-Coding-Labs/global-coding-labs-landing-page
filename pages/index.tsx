import styled from 'styled-components';

import Home from "../sections/Home";
import About from "../sections/About";

export default function Main() {
  return (
    <Wrapper>
      <Home />
      <About />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;
