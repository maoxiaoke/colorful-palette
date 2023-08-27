export interface Color {
  name: string;
  rgb: string;
  hex: string;
}

export const colorPalette: Color[] = [
  {
    name: "Sunshine",
    rgb: "151,235,177",
    hex: "#fbebb1",
  },
  {
    name: "Prairle Sunset",
    rgb: "255,178,172",
    hex: "#ffb2ac",
  },
  {
    name: "Sea Pink",
    rgb: "225,154,192",
    hex: "#e19ac0",
  },
  {
    name: "Pearl Blue",
    rgb: "156,169,190",
    hex: "#9ca9be",
  },
  {
    name: "Gleam",
    rgb: "189,200,191",
    hex: "#bdc8bf",
  },
  {
    name: "Cyber Yellow",
    rgb: "246,204,60",
    hex: "#f6cc3c",
  },
  {
    name: "Cherry Tomato",
    rgb: "255,62,48",
    hex: "#ff3e30",
  },
  {
    name: "Virtual Pink",
    rgb: "180,2,98",
    hex: "#b40262",
  },
  {
    name: "Estate Blue",
    rgb: "7,40,93",
    hex: "#07285d",
  },
  {
    name: "Shale Green",
    rgb: "89,117,96",
    hex: "#597560",
  },
  {
    name: "Lemon Curry",
    rgb: "178,144,49",
    hex: "#b29031",
  },
  {
    name: "Pompeian Red",
    rgb: "174,40,24",
    hex: "#ae2818",
  },
  {
    name: "Beet Red",
    rgb: "105,17,61",
    hex: "#69113d",
  },
  {
    name: "Dress Blues",
    rgb: "8,26,58",
    hex: "#081a3a",
  },
  {
    name: "Cypress",
    rgb: "57,70,60",
    hex: "#39463c",
  },
];

export const white: Color = {
  name: "White",
  rgb: "255,255,255",
  hex: "#ffffff",
};

export const black: Color = {
  name: "Black",
  rgb: "0,0,0",
  hex: "#000000",
};
