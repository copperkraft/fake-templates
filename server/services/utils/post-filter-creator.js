module.exports = function postFilterCreator(filters) {

  return post => (!filters.minDate || post.createdAt > filters.minDate) &&
    (!filters.maxDate || post.createdAt < filters.maxDate);
};
