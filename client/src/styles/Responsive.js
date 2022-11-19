export const responsive = {
  breakPoints: {
    mobile: '481px',
    tablet: '768px',
    desktop: '1024px',
  },
  colors: {},
};

export const mobile = `screen and (max-width: ${responsive.breakPoints.mobile})`;

export const tablet = `screen and (max-width: ${responsive.breakPoints.tablet})`;

export const desktop = `screen and (max-width: ${responsive.breakPoints.desktop})`;

export const colors = (select) => {
  return responsive.colors[select];
};
