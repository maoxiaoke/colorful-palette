import { mixedCombinations, WhiteBackgroundCombinations } from "./mixed.js";
import { white, black } from "./colors.js";

export const getRandomColorBination = (
  backgroundType: "mixed" | "white" | "black"
) => {
  if (backgroundType === "mixed") {
    return mixedCombinations[
      Math.floor(Math.random() * mixedCombinations.length)
    ];
  }

  if (backgroundType === "white") {
    return WhiteBackgroundCombinations[
      Math.floor(Math.random() * WhiteBackgroundCombinations.length)
    ];
  }

  return {
    backgroundColor: black,
    foregroundColor: white,
  };
};
