import styled, { css } from "styled-components";

export const Headline1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 140%;
`;

export const Headline3 = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 140%;
`;

export const Headline5 = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 140%;
`;

export const Flex = styled.div<{
  justifySpaceBetween?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  column?: boolean;
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
`;

export const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  height: 100vh;
  padding: .5em 0;

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

