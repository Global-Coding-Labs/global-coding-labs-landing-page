import styled, { css } from "styled-components";
import { motion } from 'framer-motion';

// Repeated code to preserve accessibility

export const Headline1 = styled.h1<{ italic?: boolean; light?: boolean; }>`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: 140%;
  line-height: 140%;

  ${props => props.italic && css`
    font-style: italic;
  `}

  ${props => props.light && css`
    font-weight: 300;
  `}
`;

export const Headline2 = styled(motion.h2) <{ italic?: boolean; light?: boolean; }>`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 140%;
  line-height: 140%;

  ${props => props.italic && css`
    font-style: italic;
  `}

  ${props => props.light && css`
    font-weight: 300;
  `}
`;

export const Headline3 = styled.h3<{ italic?: boolean; light?: boolean; }>`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 140%;
  line-height: 140%;

  ${props => props.italic && css`
    font-style: italic;
  `}

  ${props => props.light && css`
    font-weight: 300;
  `}
`;

export const Headline5 = styled(motion.h5) <{ italic?: boolean; light?: boolean; }>`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 140%;
  line-height: 140%;

  ${props => props.italic && css`
    font-style: italic;
  `}

  ${props => props.light && css`
    font-family: 'Open Sans';
    font-weight: 200;
  `}
`;

export const Body = styled.h3<{ italic?: boolean; light?: boolean; }>`
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 140%;
  line-height: 140%;

  ${props => props.italic && css`
    font-style: italic;
  `}

  ${props => props.light && css`
    font-weight: 300;
  `}
`;

export const Flex = styled(motion.div)<{
  justifySpaceBetween?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  column?: boolean;
  wrap?: boolean;
  row?: boolean;
  justifyStart?: boolean;
}>`
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  ${(props) =>
    props.justifySpaceBetween &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}
  ${(props) =>
    props.justifyCenter &&
    css`
      justify-content: center;
    `}
    ${(props) =>
    props.wrap &&
    css`
      flex-wrap: wrap;
    `}

    ${(props) =>
    props.row &&
    css`
      flex-direction: row;
    `}


    ${(props) =>
    props.justifyStart &&
    css`
      justify-content: flex-start;
    `}


`;

export const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
  position: relative;
  padding: 0.5em 0;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const Emphatize = styled.span`
  color: ${(props) => props.theme.secondary1};
`;

export const Button = styled.button`
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

export const Project = styled.div<{ color: string; }>`
  width: 100%;
  height: 40vw;
  background-color: ${props => props.color};
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
