const sortData = (data, sort, column) => {
  const filterColumn = column.toLowerCase();
  if (isNaN(data[0][filterColumn])) {
    data.sort((a, b) => (a[filterColumn] > b[filterColumn] ? 1 : -1));
  } else {
    data.sort((a, b) => a[filterColumn] - b[filterColumn]);
  }
  if (sort === 'DESC') data.reverse();
  return data;
};

export default sortData;
