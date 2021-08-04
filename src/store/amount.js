//Лучше добавить префиксы что б не было в итоге конфликтов между разными редюсерами с одинаковыми actions
const ADD = 'amount/add';
const TAKE = "amount/take";
const CLEAR = "amount/clear";

//прописываем методы
export const actions = {
  add: (value) => ({
    type: ADD,
    value,
  }),
  take: (value) => ({
    type: TAKE,
    value,
  }),
  clear: () => ({
    type: CLEAR,
  }),
};

//Все изменения amount только через amountReducer
//принимает amount как начальное значение
export const amountReducer = (amount = 0, action) => {
  switch (action.type) {
    case ADD:
      return amount + action.value;
    case TAKE:
      if (action.value > amount) {
        console.log("слишком много хочешь снять");
        return amount;
      }
      return amount - action.value;
    case CLEAR:
      return 0;
    default:
      return amount;
  }
};

//Функция должна быть pure для одних и тех же входящих данных (amount, action) возвращает один и тот же результат т.е не зависит от внешних переменных и внутри не использует случайные значения и мы не можем внутри функции менять внешние переменные, использовать обработчик событий, назначить таймер, отправить запрос на сервер...

//Её запуск предсказуем и не повлияет на другую чать программы