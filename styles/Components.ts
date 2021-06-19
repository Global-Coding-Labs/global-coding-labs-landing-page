import styled, { css } from 'styled-components'

export const Headline3 = styled.p`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 140%;
`;

export const Headline1 = styled.p`
  font-size: 4rem;
  font-weight: 600;
  letter-spacing: -1.5px;
  line-height: 140%;
`;


export const Flex = styled.div<{ justifySpaceBetween?: boolean; justifyCenter?: boolean; alignCenter?: boolean; column?: boolean; }>`
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  
  ${(props) => props.justifySpaceBetween && css`justify-content: space-between;`}
  ${(props) => props.column && css`flex-direction: column;`}
  ${(props) => props.alignCenter && css`align-items: center;`}
  ${(props) => props.justifyCenter && css`justify-content: center;`}
`;