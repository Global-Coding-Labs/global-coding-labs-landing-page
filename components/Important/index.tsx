import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode|React.ReactNode[];
}

export default function Important({ children, ...rest }: Props) {
  return (
    <Presentation>
      <Rect />
      <motion.div style={{ opacity: 0 }} {...rest}>
        {children}
      </motion.div>
    </Presentation>
  );
}

const Presentation = styled(motion.div)`
  margin-top: 9em;
  display: flex;
  opacity: 1;
`;

const Rect = styled.div`
  background-color: ${(props) => props.theme.secondary1};
  width: 0.5em;
  min-height: 0.1em;
`;
