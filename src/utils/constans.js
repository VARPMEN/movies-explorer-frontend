export const NOTFOUND_ERROR = {
  errorCode: 404,
  errorMessage: "Страница не найдена.",
};

export const SERVER_ERROR = {
  errorCode: 500,
  errorMessage: "На сервере произошла ошибка.",
};

export const ERROR_MESSAGES = {
  errorInvalidMessage: "Вы ввели неправильный логин или пароль.",
  errorEmailErrorMessage: "Пользователь с таким email уже существует.",
  errorRegisterErrorMessage: "При регистрации пользователя произошла ошибка.",
  errorUpdateUserInfoMessage: "При обновлении профиля произошла ошибка.",
};

export const nameReg = "[a-zA-Zа-яА-Я0-9 -]{1,40}";
export const emailReg = "[a-z0-9]{2,40}@[a-z]{2,10}\\.[a-z]{2,5}";
