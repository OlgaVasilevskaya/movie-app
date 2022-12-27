import { useState, useEffect } from "react";

const useGoUp = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return position;
}

export { useGoUp };
