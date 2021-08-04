const ADD = "goods/add";
const TAKE = "goods/take";
const CLEAR = "goods/clear";

export const actions = {
  add: (good) => ({
    type: ADD,
    good,
  }),
  take: (good) => ({
    type: TAKE,
    good,
  }),
  clear: () => ({
    type: CLEAR,
  }),
};

export const goodsReducer = (goods = [], action) => {
  switch (action.type) {
    case ADD:
      return [...goods, action.good];
    case TAKE:
      // оставляем в массиве те, для которых условие true т.е убираем те, которые выбрали
      return goods.filter(good => good !== action.good);
    case CLEAR:
      return [];
    default:
      return goods;
  }
}