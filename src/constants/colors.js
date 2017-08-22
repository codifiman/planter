export const BLACK = {
  label: 'Black',
  value: 'hsl(0, 0%, 10%)'
};
export const BROWN = {
  label: 'Brown',
  value: 'hsl(15, 10%, 50%)'
};

export const colors = [
  BLACK,
  BROWN,
];

export const colorMap = colors.reduce((acc, c) => {
  acc[c.label] = c;
  return acc;
}, {});
