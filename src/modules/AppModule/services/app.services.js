export const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["a", "b", "c", null]);
    }, 2500);
  });
};
