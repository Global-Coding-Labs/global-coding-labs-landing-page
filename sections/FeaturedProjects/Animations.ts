import React from "react";
import { useAnimation, AnimationControls } from "framer-motion";

import { useHandleScroll } from "../../hooks";
import { handleScrollTo } from "../../utils";

export function useProjectControlledAnimations() {
  const projectControls = useAnimation();
  const titleControls = useAnimation();
  const descriptionControls = useAnimation();

  function startControlledAnimation(
    controls: AnimationControls,
    delay: number
  ) {
    controls.start(
      {
        y: 0,
        opacity: 1,
      },
      { delay, duration: 0.5, ease: "easeOut" }
    );
  }

  useHandleScroll(
    handleScrollTo(4, () => {
      startControlledAnimation(projectControls, 0.3);
      startControlledAnimation(titleControls, 0.8);
      startControlledAnimation(descriptionControls, 1.3);
    })
  );

  return [projectControls, titleControls, descriptionControls];
}
