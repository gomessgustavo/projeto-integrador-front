export const checkArray = (mainArr: any[], arr2: any[]) => {
  if (mainArr.some((arr) => arr.id === arr2.find((item) => item.id)?.id)) {
    return false;
  }

  return true;
};
