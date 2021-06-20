import React, { useState, useEffect } from 'react';

export function useGetDistanceToTheTop(domElement: any) {
  const [distance, setDistance] = useState({
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (domElement) {
      setDistance({
        top: -domElement.getBoundingClientRect().top,
        bottom: window.innerHeight - domElement.getBoundingClientRect().bottom,
        left: -domElement.getBoundingClientRect().left,
        right: window.innerWidth - domElement.getBoundingClientRect().right,
      });
    }
  }, [domElement]);

  return distance;
}

export function useGetElementPositionConstraints(ref: any) {
  const [element, setElement] = useState(null);
  const distance = useGetDistanceToTheTop(element);

  useEffect(() => {
    const domElement = ref.current;
    if (domElement) {
      setElement(domElement);
    }
  }, [ref]);

  return distance;
}