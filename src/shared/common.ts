export const generateQuery = (query: object): Query => {
  return new URLSearchParams(query);
};
