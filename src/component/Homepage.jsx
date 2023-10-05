import { useEffect, useState } from "react";
import Home from "./Home";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Homepage = () => {
  const [screenSize, getDimension] = useState(getWindowDimensions);
  const setDimension = () => {
    getDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const { width, height } = screenSize;

  const [activeB, setActiveB] = useState(false);

  const isActive = () => {
    window.scrollY > 350 ? setActiveB(true) : setActiveB(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div>
      <Home height={height} width={width} active={activeB} />
    </div>
  );
};

export default Homepage;
