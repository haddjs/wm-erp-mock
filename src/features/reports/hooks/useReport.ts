const getPagination = (currentPage: number, totalPages: number) => {
  const delta = 1;
  const range = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  const pages = [];

  pages.push(1);

  if (currentPage - delta > 2) {
    pages.push("...");
  }

  pages.push(...range);

  if (currentPage + delta > totalPages - 1) {
    pages.push("...");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
};
