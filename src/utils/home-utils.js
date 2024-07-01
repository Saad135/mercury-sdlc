import { reformatArr } from "./common-utls";

export function reformatAttractionArr(attractionArr) {
  return reformatArr(attractionArr, reformatAttrItem);
}

function reformatAttrItem(attrItem) {
  return {
    id: attrItem?.id,
    title: attrItem?.title,
    mediaUrl: attrItem?.media_url,
    permalink: attrItem?.permalink,
    description: attrItem?.description,
  };
}
