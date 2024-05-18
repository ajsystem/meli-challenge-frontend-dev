export const countDecimals = (num: number) => {
  return num.toString().split('.')[1]?.length || 0;
};
