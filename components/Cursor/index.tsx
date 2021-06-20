import { useState, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { useStore } from '../../state';

export default function Cursor(props: HTMLAttributes<HTMLElement>) {
  const [positions, setPositions] = useState({ x: 100, y: 100 });
  const { state: { cursor } } = useStore();

  function onMouseMove(e: any) {
    setPositions({
      x: e.pageX - 15,
      y: e.pageY - 15
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
  height: .8em;
  width: .8em;
  border-radius: 50%;
  position: absolute;
  z-index: 99;
  user-select: none;
  pointer-events: none;
  transition-duration: .1s;
  transition-property: width, height, background-color, border;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);

  &.default {
    background-color: ${props => props.theme.primary1};
  }

  &.focus {
    border: .2em solid ${props => props.theme.secondary1};
    width: 4em;
    height: 4em;
    transform: translate(-30%, -30%);
  }
`;