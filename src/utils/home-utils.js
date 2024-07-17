import { reformatArr } from "./common-utls";

export function reformatEventsArr(attractionArr) {
  return reformatArr(attractionArr, reformatEventItem);
}

export function reformatEventItem(attrItem) {
  return {
    id: attrItem?.id,
    title: attrItem?.title,
    mediaUrl: attrItem?.media_url,
    permalink: attrItem?.permalink,
    description: attrItem?.description,
  };
}

export function extractCategoryNames(categoryArr) {
  return categoryArr?.map((category) => category?.name);
}
