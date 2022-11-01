/**
 * Is object empty
 */
export const isEmpty = (obj: any) => {
  if (obj === null || obj === undefined) return true;

  for (let key in obj) {
    if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
      return true;
    }
  }
};
