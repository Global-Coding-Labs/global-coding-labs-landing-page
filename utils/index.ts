export function handleScrollTo(section: number, animate: () => void) {
  return function startAnimation() {
    if (+this.scrollY > ((section - 1) * window.innerHeight) / 2) {
      animate();
    }
  };
}