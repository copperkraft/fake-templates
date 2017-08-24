const defaultPageSize = 5;

module.exports = function paginator(pagination = defaultPageSize) {
  return data => ({
    data: data.slice(
      pagination.page * pagination.pageSize,
      (pagination.page + 1) * pagination.pageSize
    ),
    pageCount: Math.ceil(data.length / pagination.pageSize)
  });
};
