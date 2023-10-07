import BIRDS from "vanta/dist/vanta.birds.min";
import { useEffect, useState } from "react";

const Background = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: ".App ",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x96c9ff,
          color1: 0x47598e,
          color2: 0xc0c0c0,
          wingSpan: 20.0,
          speedLimit: 4.0,
          alignment: 1.0,
          separation: 80.0,
          cohesion: 50.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div>{children}</div>;
};

export default Background;
