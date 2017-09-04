export const BLACK = {
  label: 'Black',
  value: 'black'
};
export const BROWN = {
  label: 'Brown',
  value: 'brown'
};

export const colors = [
  BLACK,
  BROWN,
];

export const colorMap = colors.reduce((acc, c) => {
  acc[c.label] = c;
  return acc;
}, {});
