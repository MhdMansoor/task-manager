export const paginate = (items, number) => {
  const itemsPerPage = number; //number of items to show in a page
  const pages = Math.ceil(items.length / itemsPerPage);

  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  console.log(newItems);

  return newItems;
};
