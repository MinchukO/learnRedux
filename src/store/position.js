
const LEFT = "left";
const RIGHT = "right";
const UP = "up";
const DOWN = "down";

export const actions = {
  left: () => ({
    type: LEFT,
  }),
  right: () => ({
    type: RIGHT,
  }),
  up: () => ({
    type: UP,
  }),
  down: () => ({
    type: DOWN,
  }),

  //action может быть и функцией(thunk), всегда принимает dispatch
  //выполняет actions асинхроно
  // возвращаем promise что б внешний код понял когда закончилось последнее действие и подписался на результат
  circle(delay) {
    return (dispatch) => {
      return new Promise(resolve => {
        dispatch(actions.right());

        setTimeout(() => {
          dispatch(actions.down());
        }, delay);

        setTimeout(() => {
          dispatch(actions.left());
        }, delay * 2);

        setTimeout(() => {
          dispatch(actions.up());
          resolve();
        }, delay * 3);
      });
    };
  },
};


//что бы внешний код не зависил от названий ключа объекта
export const getX = position => position.x;
export const getY = position => position.y;

const startPosition = { x: 0, y: 0 };


//если бы я возвращала position, а не новый массив, то я бы мутировала массив и не увидела промежуточные изменения
export const positionReducer = (position = startPosition, action) => {
  switch (action.type) {
    case LEFT:
      return {
        ...position,
        x: position.x - 1,
      };
    case RIGHT:
      return {
        ...position,
        x: position.x + 1,
      };
    case UP:
      return {
        ...position,
        y: position.y - 1,
      };
    case DOWN:
      return {
        ...position,
        y: position.y + 1,
      };
    default:
      return position;
  }
};