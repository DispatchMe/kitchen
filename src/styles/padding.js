const BASE_PADDING = 1.5;

function getPadding(multiplier = 1) {
  return `${BASE_PADDING * multiplier}rem`;
}

export default {
  eighth: getPadding(0.125),
  half: getPadding(0.5),
  quarter: getPadding(0.25),
  default: getPadding(),
  two: getPadding(2),
  four: getPadding(4),
  six: getPadding(6),
  get: getPadding,
};
