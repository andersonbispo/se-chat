const orderByDate = (arr, dateAttr) => {
  return arr.sort((a, b) => {
    var keyA = new Date(a[dateAttr]),
      keyB = new Date(b[dateAttr]);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
};

export { orderByDate };