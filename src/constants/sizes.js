export const A7 = {
  label:  'A7',
  width:  3,
  height: 4
};

export const B7 = {
  label:  'B7',
  width:  3.4,
  height: 4.9
};

export const A6 = {
  label:  'A6',
  width:  4.1,
  height: 5.8
};

export const PERSONAL = {
  label:  'Personal',
  width:  3.5,
  height: 6.75
};

export const B6 = {
  label:  'B6',
  width:  4.9,
  height: 6.9
  };

export const NARROW = {
  label:  'Narrow',
  width:  4.3,
  height: 8.25
};

export const WIDE = {
  label:  'Wide',
  width:  5,
  height: 8.25
};

export const A5 = {
  label:  'A5',
  width:  5.8,
  height: 8.25
};

export const B5 = {
  label:  'B5',
  width:  7,
  height: 10
};

export const sizes = [
  A7,
  B7,
  A6,
  PERSONAL,
  B6,
  NARROW,
  WIDE,
  A5,
  B5
];

export const sizeMap = sizes.reduce((acc, s) => {
  acc[s.label] = s;
  return acc;
}, {});
