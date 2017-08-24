module.exports = function paginator(pagination) {
  return data =>
    data.slice(
      pagination.offset,
      pagination.page * pagination.pageSize
    );
};
