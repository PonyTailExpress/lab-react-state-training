import { useState } from "react";

function DiscoButton() {
  // State for likes count
  const [likes, setLikes] = useState(0);

  // State for color index
  const [colorIndex, setColorIndex] = useState(0);

  // Array of colors
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  // Event handler for button click
  const handleClick = () => {
    setLikes(likes + 1); // Increase the likes count

    // Cycle through colors: update the color index
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Ensure index wraps around
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: colors[colorIndex], // Set background color based on current index
        color: "white", // Text color for contrast
        fontSize: "16px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease", // Smooth transition for color change
      }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;
