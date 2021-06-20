import { useState, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { useStore } from '../../state';

export default function Cursor(props: HTMLAttributes<HTMLElement>) {
  const [positions, setPositions] = useState({ x: 100, y: 100 });
  const { state: { cursor } } = useStore();

  function onMouseMove(e: any) {
    setPositions({
      x: e.pageX,
      y: e.pageY
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <CustomCursor style={{ top: positions.y, left: positions.x }} {...props} className={cursor} />
  );
}

const CustomCursor = styled.div`
  height: 1.25em;
  width: 1.25em;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 99;
  user-select: none;
  pointer-events: none;
  transition-duration: .1s;
  transition-property: width, height, background-color, border;

  &.default {
    background-color: ${props => props.theme.primary1};
  }

  &.focus {
    border: 5px solid ${props => props.theme.secondary1};
    width: 4em;
    height: 4em;    
  }
`;