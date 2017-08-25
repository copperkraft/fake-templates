module.exports = function postFilterCreator(filters) {
  const minDate = filters.minDate && new Date(filters.minDate);
  const maxDate = filters.maxDate && new Date(filters.maxDate);
  return post => (!minDate || post.createdAt > minDate) &&
    (!maxDate || post.createdAt < maxDate);
};
