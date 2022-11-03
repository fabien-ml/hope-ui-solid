import type { PaletteRange, PaletteScale, ThemeScales } from "@hope-ui/styles";
import { createGlobalThemeContract } from "@vanilla-extract/css";

const paletteScaleSchema: PaletteScale = {
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
};

const paletteRangeSchema: PaletteRange = {
  ...paletteScaleSchema,
  mainChannel: "",
  lightChannel: "",
  darkChannel: "",
};

const space: ThemeScales["space"] = {
  "0.5": "",
  "1": "",
  "1.5": "",
  "2": "",
  "2.5": "",
  "3": "",
  "3.5": "",
  "4": "",
  "5": "",
  "6": "",
  "7": "",
  "8": "",
  "9": "",
  "10": "",
  "12": "",
  "14": "",
  "16": "",
  "20": "",
  "24": "",
  "28": "",
  "32": "",
  "36": "",
  "40": "",
  "44": "",
  "48": "",
  "52": "",
  "56": "",
  "60": "",
  "64": "",
  "72": "",
  "80": "",
  "96": "",
};

// !!! Important !!!
// tokens should be same shape as "@hope-ui/styles" runtime theme
export const vars = createGlobalThemeContract(
  {
    colors: {
      whiteAlpha: { ...paletteScaleSchema },
      blackAlpha: { ...paletteScaleSchema },
      primary: { ...paletteRangeSchema },
      neutral: { ...paletteRangeSchema },
      success: { ...paletteRangeSchema },
      info: { ...paletteRangeSchema },
      warning: { ...paletteRangeSchema },
      danger: { ...paletteRangeSchema },
      common: {
        white: "",
        black: "",
        foreground: "",
        background: "",
        focusRing: "",
      },
    },
    fonts: {
      sans: null,
      serif: null,
      mono: null,
    },
    fontSizes: {
      xs: "",
      sm: "",
      base: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      "4xl": "",
      "5xl": "",
      "6xl": "",
      "7xl": "",
      "8xl": "",
      "9xl": "",
    },
    fontWeights: {
      hairline: "",
      thin: "",
      light: "",
      normal: "",
      medium: "",
      semibold: "",
      bold: "",
      extrabold: "",
      black: "",
    },
    lineHeights: {
      none: "",
      shorter: "",
      short: "",
      base: "",
      tall: "",
      taller: "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
    },
    letterSpacings: {
      tighter: "",
      tight: "",
      normal: "",
      wide: "",
      wider: "",
      widest: "",
    },
    space,
    sizes: {
      ...space,
      max: "",
      min: "",
      full: "",
      screenW: "",
      screenH: "",
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      "4xl": "",
      "5xl": "",
      "6xl": "",
      "7xl": "",
      "8xl": "",
    },
    radii: {
      none: "",
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      full: "",
    },
    shadows: {
      none: "",
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      inner: "",
    },
    zIndices: {
      hide: "",
      base: "",
      docked: "",
      sticky: "",
      banner: "",
      overlay: "",
      modal: "",
      dropdown: "",
      popover: "",
      tooltip: "",
      skipLink: "",
      toast: "",
    },
    breakpoints: {
      base: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
    },
  },
  (_value, path) => `hope-${path.map(val => val.replace(".", "-")).join("-")}`
);

export const focusVisibleStyles = {
  WebkitTapHighlightColor: "transparent",

  selectors: {
    "&:focus": {
      outlineOffset: "2px",
      outline: `2px solid ${vars.colors.common.focusRing}`,
    },

    "&:focus:not(:focus-visible)": {
      outline: "none",
    },
  },
};
