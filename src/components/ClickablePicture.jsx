import { useState } from "react";
import maxenceGlasses from "../assets/images/maxence-glasses.png";
import maxence from "../assets/images/maxence.png";

function ClickablePicture() {
  const [isGlasses, setIsGlasses] = useState(false);

  const toggleImage = () => {
    setIsGlasses(!isGlasses);
  };

  return (
    <img
      src={isGlasses ? maxenceGlasses : maxence}
      alt="Maxence"
      onClick={toggleImage}
    />
  );
}

export default ClickablePicture;