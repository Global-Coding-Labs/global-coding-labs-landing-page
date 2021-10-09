import React from 'react';
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import { Headline5, Headline2, Project } from "../../styles/Components";
import KFC from "../../assets/kfc-phone.png";
import { useProjectControlledAnimations } from "./Animations";
import { useProjectCardAnimation } from '../../hooks'

export default function ProjectKFC() {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [projectControls, titleControls, descriptionControls] =
    useProjectControlledAnimations(4);

  const [mousePosition, setMousePosition] = useProjectCardAnimation(projectRef);

  return (
    <Project
      color="#e8292c"
      style={{
        boxShadow: `${mousePosition.shadow}`,
        transform: `rotateY(${mousePosition.rotate}deg) skew(${mousePosition.skew}deg)`,
      }}
      ref={projectRef}
      onMouseLeave={() =>
        setMousePosition({
          skew: 0,
          rotate: 0,
          shadow: "0px 0px 10px rgba(0, 0, 0, .35)",
        })
      }
    >
      <Heading>
        <H2 italic initial={{ y: 200, opacity: 0 }} animate={titleControls}>
          KFC
        </H2>

        <H5
          light
          initial={{ y: 200, opacity: 0 }}
          animate={descriptionControls}
        >
          KFC Iceland, delevoped in colaboration with the M7 is an ecommerce for
          the KFC Iceland products that aims to deliver to the user a big range
          of product modifications.
        </H5>
      </Heading>

      <ImageContainer
        initial={{ y: 20, opacity: 0.75 }}
        animate={projectControls}
      >
        <Img layout="intrinsic" src={KFC} alt="KFC app" />
      </ImageContainer>
    </Project>
  );
}

const H2 = styled(Headline2)`
  color: white;
`;

const H5 = styled(Headline5)`
  color: white;
`;



const Heading = styled.div`
  width: 50%;

  @media (max-width: 550px) {
    width: 100%;

    & > * {
      text-align: center;
    }

    h2 {
      font-size: 3.5rem;
    }

    h5 {
      font-size: 1.5rem;
    }
  }
`;

const Img = styled(Image)``;

const ImageContainer = styled(motion.div)`
  position: absolute;
  bottom: -22vw;
  right: -40vw;
  width: 50em;
  height: 40em;

  img {
    width: 20em;
  }

  @media (max-width: 950px) {
    right: -50vw;
    bottom: -28vw;

    img {
      width: 18em;
    }
  }

  @media (max-width: 800px) {
    right: -60vw;
    bottom: -40vw;

    img {
      width: 15em;
    }
  }

  @media (max-width: 800px) {
    right: -60vw;
    bottom: -45vw;
  }

  @media (max-width: 550px) {
    right: -40vw;
    bottom: -20vw;

    img {
      width: 25em;
    }
  }

  @media (max-width: 450px) {
    right: -55vw;
    bottom: -20vw;
  }

  @media (max-width: 350px) {
    right: -55vw;
    bottom: -15vw;

    img {
      width: 30em;
    }
  }
`;
