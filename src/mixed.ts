import { colorPalette, white, black } from "./colors.js";

/**
 * In order to maintain maximum visiility and legibility at all times, it is important not to combine certain colours.
 * Acceptable combinations are shown below.
 * No combinations other than those specified in this manual may be made.
 *
 */

export const SunshineCombinations = [
  {
    backgroundColor: colorPalette[0],
    foregroundColor: colorPalette[3],
  },
  {
    backgroundColor: colorPalette[0],
    foregroundColor: colorPalette[2],
  },
  {
    backgroundColor: colorPalette[0],
    foregroundColor: colorPalette[9],
  },
  {
    backgroundColor: colorPalette[0],
    foregroundColor: colorPalette[6],
  },
  {
    backgroundColor: colorPalette[0],
    foregroundColor: colorPalette[8],
  },
];

export const PrairieSunsetCombinations = [
  {
    backgroundColor: colorPalette[1],
    foregroundColor: colorPalette[6],
  },
  {
    backgroundColor: colorPalette[1],
    foregroundColor: colorPalette[12],
  },
  {
    backgroundColor: colorPalette[1],
    foregroundColor: colorPalette[10],
  },
  {
    backgroundColor: colorPalette[1],
    foregroundColor: colorPalette[11],
  },
];

export const SeaPinkCombinations = [
  {
    backgroundColor: colorPalette[2],
    foregroundColor: colorPalette[14],
  },
  {
    backgroundColor: colorPalette[2],
    foregroundColor: colorPalette[8],
  },
  {
    backgroundColor: colorPalette[2],
    foregroundColor: colorPalette[11],
  },
  {
    backgroundColor: colorPalette[2],
    foregroundColor: colorPalette[0],
  },
  {
    backgroundColor: colorPalette[2],
    foregroundColor: colorPalette[12],
  },
];

export const PearlBlueCombinations = [
  {
    backgroundColor: colorPalette[3],
    foregroundColor: colorPalette[0],
  },
  {
    backgroundColor: colorPalette[3],
    foregroundColor: colorPalette[13],
  },
];

export const GleamCombinations = [
  {
    backgroundColor: colorPalette[4],
    foregroundColor: colorPalette[10],
  },
  {
    backgroundColor: colorPalette[4],
    foregroundColor: colorPalette[13],
  },
];

export const CyberYellowCombinations = [
  {
    backgroundColor: colorPalette[5],
    foregroundColor: colorPalette[14],
  },
];

export const CherryTomatoCombinations = [
  {
    backgroundColor: colorPalette[6],
    foregroundColor: colorPalette[1],
  },
];

export const VirtualPinkCombinations = [
  {
    backgroundColor: colorPalette[7],
    foregroundColor: colorPalette[0],
  },
];

export const EstateBlueCombinations = [
  {
    backgroundColor: colorPalette[8],
    foregroundColor: colorPalette[4],
  },
  {
    backgroundColor: colorPalette[8],
    foregroundColor: colorPalette[2],
  },
  {
    backgroundColor: colorPalette[8],
    foregroundColor: colorPalette[0],
  },
];

export const ShaleGreenCombinations = [
  {
    backgroundColor: colorPalette[9],
    foregroundColor: colorPalette[0],
  },
];

export const LemonCurryCombinations = [
  {
    backgroundColor: colorPalette[10],
    foregroundColor: colorPalette[1],
  },
];

export const PompeianRedCombinations = [
  {
    backgroundColor: colorPalette[11],
    foregroundColor: colorPalette[1],
  },
  {
    backgroundColor: colorPalette[11],
    foregroundColor: colorPalette[2],
  },
  {
    backgroundColor: colorPalette[11],
    foregroundColor: colorPalette[4],
  },
];

export const BeetRedCombinations = [
  {
    backgroundColor: colorPalette[12],
    foregroundColor: colorPalette[1],
  },
  {
    backgroundColor: colorPalette[12],
    foregroundColor: colorPalette[2],
  },
];

export const DressBluesCombinations = [
  {
    backgroundColor: colorPalette[13],
    foregroundColor: colorPalette[3],
  },
  {
    backgroundColor: colorPalette[13],
    foregroundColor: colorPalette[5],
  },
];

export const CypressCombinations = [
  {
    backgroundColor: colorPalette[14],
    foregroundColor: colorPalette[2],
  },
];

/**
 * White is used as a complementary color
 */

export const WhiteBackgroundCombinations = colorPalette
  .map((color) => ({
    backgroundColor: white,
    foregroundColor: color,
  }))
  .concat([
    {
      backgroundColor: white,
      foregroundColor: black,
    },
  ]);

export const WhiteForegroundCombinations = colorPalette
  .map((color) => ({
    backgroundColor: color,
    foregroundColor: white,
  }))
  .concat([
    {
      backgroundColor: black,
      foregroundColor: white,
    },
  ]);

export const mixedCombinations = [
  ...SunshineCombinations,
  ...PrairieSunsetCombinations,
  ...SeaPinkCombinations,
  ...PearlBlueCombinations,
  ...GleamCombinations,
  ...CyberYellowCombinations,
  ...CherryTomatoCombinations,
  ...VirtualPinkCombinations,
  ...EstateBlueCombinations,
  ...ShaleGreenCombinations,
  ...LemonCurryCombinations,
  ...PompeianRedCombinations,
  ...BeetRedCombinations,
  ...DressBluesCombinations,
  ...CypressCombinations,
  ...WhiteForegroundCombinations,
];
