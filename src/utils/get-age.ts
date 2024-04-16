const getAge = (birthDate: string) => {
  const date = new Date();
  const time = new Date(birthDate).getTime();
  // @ts-ignore
  const diff = (date - time) / 3.15576e10;
  return Math.floor(diff);
};

export { getAge };
