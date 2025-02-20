export const generateQuery = (query: object): Query => {
  const senatizedQuery = new URLSearchParams(query);
  const queryString = '?' + senatizedQuery;
  return queryString;
};
