//File Description for theme.js
//theme.js is a javascript file that contains the themes that are used in common throughout the website
//the plan was to decide on colors, fontsized, elevations to use together but didn't end up unifying it
//Author: Min Chang Kim
export const sizes = {
  desktop: "1024",
  tablet: "820",
  mobile: "500",
};

const theme = {
  colors: {},
  fontSizes: {},
  //prefixed elevations for components
  elevations: {
    elevation_light:
      "0px 1px 2px rgba(0, 0, 0, 0.16), 0px 1px 0px rgba(0, 0, 0, 0.12)",
    elevation_medium: "0px 2px 2px rgba(0, 0, 0, 0.30)",
    elevation_heavy: "0px 4px 10px rgba(0, 0, 0, 0.30)",
    elecation_j:
      "rgb(23 43 77 / 20%) 0px 1px 1px, rgb(23 43 77 / 20%) 0px 0px 1px",
  },
  //screen size and width size used for responsive programming
  screenSizes: {
    desktop: `(max-width: ${sizes.desktop}px)`,
    tablet: `(max-width: ${sizes.tablet}px)`,
    mobile: `(max-width: ${sizes.mobile}px)`,
  },
  widthSizes: {
    desktop: sizes.desktop,
    tablet: sizes.tablet,
    mobile: sizes.mobile,
  },
};

export default theme;
