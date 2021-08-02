import styled from 'styled-components';

import Home from "../sections/Home";
import About from "../sections/About";
import FeaturedProjects from "../sections/FeaturedProjects";
import Services from "../sections/Services";
import Contact from "../sections/Contact";
import ProjectRequest from "../sections/ProjectRequest";

export default function Main() {
  return (
    <Wrapper>
      <Home />
      <About />
      <FeaturedProjects />
      <Services />
      <Contact />
      <ProjectRequest />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;
