export function reformatArr(unformattedArr, reformatCallback) {
  return unformattedArr?.map((arrItem) =>
    reformatItem(arrItem, reformatCallback),
  );
}

export function reformatItem(item, reformatCallback) {
  return reformatCallback ? reformatCallback(item) : item;
}
