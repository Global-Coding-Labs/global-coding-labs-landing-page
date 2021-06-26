import { useRef, useEffect, useState, RefObject } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

import { Headline5, Headline2 } from "../../styles/Components";
import KFC from "../../assets/kfc-phone.png";
import { useProjectControlledAnimations } from "./Animations";

export default function ProjectKFC() {
  const [mousePosition, setMousePosition] = useState({
    skew: 0,
    rotate: 0,
    shadow: "0px 0px 10px rgba(0, 0, 0, .35)",
  });
  const projectRef = useRef<HTMLDivElement | null>(null);
  const [projectControls, titleControls, descriptionControls] =
    useProjectControlledAnimations();

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const project = projectRef.current;

      if (project) {
        const boundaries = project.getBoundingClientRect();

        const middleY = (boundaries.top + boundaries.bottom) / 2;
        const middleX = (boundaries.right + boundaries.left) / 2;

        if (
          event.clientY < boundaries.bottom &&
          event.clientY > boundaries.top &&
          event.clientX < boundaries.right &&
          event.clientX > boundaries.left
        ) {
          if (
            event.clientY > (middleY + boundaries.top) / 2 &&
            event.clientY < (middleY + boundaries.bottom) / 2 &&
            event.clientX > middleX - 200 + boundaries.left / 2 &&
            event.clientX < middleX + middleX / 2
          ) {
            return setMousePosition({
              rotate: 0,
              skew: 0,
              shadow: "0px 0px 15px rgba(0, 0, 0, .35)",
            });
          }
          if (event.clientY > middleY && event.clientY < boundaries.bottom) {
            if (event.clientX > middleX && event.clientX < boundaries.right) {
              setMousePosition({
                rotate: -15,
                skew: 3,
                shadow: "-15px -10px 15px rgba(0, 0, 0, .35)",
              });
            } else {
              if (event.clientX < middleX && event.clientX > boundaries.left) {
                setMousePosition({
                  rotate: -15,
                  skew: -3,
                  shadow: "15px -10px 15px rgba(0, 0, 0, .35)",
                });
              }
            }
          } else {
            if (event.clientY < middleY && event.clientY > boundaries.top) {
              if (event.clientX > middleX && event.clientX < boundaries.right) {
                setMousePosition({
                  rotate: 15,
                  skew: 3,
                  shadow: "-15px 10px 15px rgba(0, 0, 0, .35)",
                });
              } else {
                if (
                  event.clientX < middleX &&
                  event.clientX > boundaries.left
                ) {
                  setMousePosition({
                    rotate: 15,
                    skew: -3,
                    shadow: "15px 10px 15px rgba(0, 0, 0, .35)",
                  });
                }
              }
            }
          }
        }
      }
    });
  }, []);

  return (
    <Project
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

const Project = styled.div`
  width: 100%;
  height: 40vw;
  background-color: #e8292c;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 5em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  /* TODO: MAKE CARD MOVE ACCORDILING TO THE POSITION OF THE MOUSE ON IT */
  perspective: 1000px;
  transform-style: preserve-3d;
  /* transform: rotateY(0deg) skew(0deg); */

  transition: 1s all;

  /* &:hover {
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.5);

  } */

  @media (max-width: 550px) {
    height: 80vh;
    align-items: flex-start;
    justify-content: center;
    padding-top: 2em;
  }

  /* transform: rotate(40deg); */
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
