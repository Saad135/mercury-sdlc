import { reformatArr } from "./common-utls";

export function reformatEventsArr(attractionArr) {
  return reformatArr(attractionArr, reformatEventItem);
}

function reformatEventItem(attrItem) {
  return {
    id: attrItem?.id,
    title: attrItem?.title,
    mediaUrl: attrItem?.media_url,
    permalink: attrItem?.permalink,
    description: attrItem?.description,
  };
}
