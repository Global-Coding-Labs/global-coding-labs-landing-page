import React, { useState, useEffect } from "react";

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
        top: -domElement.getBoundingClientRect().top - 300,
        bottom:
          window.innerHeight - domElement.getBoundingClientRect().bottom - 300,
        left: -domElement.getBoundingClientRect().left + 300,
        right:
          window.innerWidth - domElement.getBoundingClientRect().right + 300
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

export function useHandleScroll(handler: () => void) {
  useEffect(() => {
    window.addEventListener("scroll", handler);
  }, []);
}
