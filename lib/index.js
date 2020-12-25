import { dramas_list } from "./dramas";

export const getDramas = (drama) => {
  if (drama === "kdramas") {
    return dramas_list.korean;
  } else if (drama === "tdramas") {
    return dramas_list.thailand;
  } else if (drama === "cdramas") {
    return dramas_list.chinese;
  } else {
    return [];
  }
};
