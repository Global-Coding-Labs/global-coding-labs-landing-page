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
        left: -domElement.getBoundingClientRect().left + 200,
        right:
          window.innerWidth - domElement.getBoundingClientRect().right + 180
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

export function useProjectCardAnimation(ref: any) {
  const [mousePosition, setMousePosition] = useState<any>({
    skew: 0,
    rotate: 0,
    shadow: "0px 0px 10px rgba(0, 0, 0, .35)",
  });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      const project = ref.current;

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

  return [mousePosition, setMousePosition];
}
