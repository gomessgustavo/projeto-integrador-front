export const init = (classe: any) => {
  const instance = new classe();
  Object.keys(instance).forEach((key) => {
    instance[key] = "";
  });

  return instance;
};
