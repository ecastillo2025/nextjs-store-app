'use client';

import { useState } from "react";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons"

export default function FavoriteBtn() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite((prevState) => !prevState)}
      className="text-2xl"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? <HeartFilledIcon /> : <HeartIcon />}
    </button>
  );
}
