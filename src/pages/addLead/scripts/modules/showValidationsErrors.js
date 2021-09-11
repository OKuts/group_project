export const showValidationsErrors = (errors, list) => {
  const errorKeys = Object.values(errors).map((item) => item.path);
  list.forEach((item) => {
    const element = item;
    const { path } = element.dataset;
    if (path !== undefined) {
      const num = errorKeys.indexOf(path);
      if (num >= 0) {
        element.innerText = errors[num].message;
      } else {
        element.innerText = '';
      }
    }
  });
};