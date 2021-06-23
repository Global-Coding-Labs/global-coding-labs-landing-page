import styled from 'styled-components';

import Home from "../sections/Home";
import About from "../sections/About";
import FeaturedProjects from "../sections/FeaturedProjects";

export default function Main() {
  return (
    <Wrapper>
      <Home />
      <About />
      <FeaturedProjects />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;
