// Removes item if already in array, appends otherwise
export function toggleItemInArr({ id, activeIds }) {
  let newPostIdsArr = [];

  // Perform the toggle based on presence
  if (!activeIds.includes(id)) {
    newPostIdsArr = [...activeIds, id];
  } else {
    newPostIdsArr = activeIds
      ? Array.from(activeIds).filter((postId) => postId != id)
      : [];
  }

  return newPostIdsArr;
}
