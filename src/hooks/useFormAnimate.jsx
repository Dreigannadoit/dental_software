import { useState, useEffect, useCallback } from "react";

const useAnimation = (animationDuration = 1000) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false); // To handle initial render

  const triggerEnter = useCallback(() => {
    setIsAnimating(true);
    setIsInitialized(true); // Mark initialization complete
    setIsVisible(true);
  }, []);

  const triggerExit = useCallback((onAnimationEnd) => {
    setIsAnimating(true);
    setIsVisible(false);

    const timeout = setTimeout(() => {
      setIsAnimating(false);
      if (onAnimationEnd) onAnimationEnd();
      clearTimeout(timeout);
    }, animationDuration);
  }, [animationDuration]);

  return { isVisible, isInitialized, triggerEnter, triggerExit, isAnimating };
};

export default useAnimation;
