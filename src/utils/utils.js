// Removes item if already in array, appends otherwise
export function toggleItemInArr({ event, activeEvents }) {
  let newEventsArr = [];

  const activeIds = activeEvents?.map((event) => event?.id);
  const id = event?.id;

  // Perform the toggle based on presence
  if (!activeIds.includes(id)) {
    newEventsArr = [...activeEvents, event];
  } else {
    const removeIndex = activeIds?.findIndex((currId) => currId === id);

    newEventsArr = [
      ...activeEvents?.slice(0, removeIndex),
      ...activeEvents?.slice(removeIndex + 1),
    ];
  }

  return newEventsArr;
}
