const easing = [0.5, 1, 0.89, 1];
const easint2 = [0.34, 1.56, 0.64, 1];
const fadeInSide = {
  initial: {
    x: -200,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    x: -200,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const fadeInRight = {
  initial: {
    x: 300,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easint2,
    },
  },
};

export { fadeInRight, fadeInSide };
