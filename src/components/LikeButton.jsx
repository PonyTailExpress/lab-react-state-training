import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      {likes} {likes === 1 ? "Like" : "Likes"}
    </button>
  );
}

export default LikeButton;
