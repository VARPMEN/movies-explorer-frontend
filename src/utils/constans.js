export const notFoundError = {
  errorCode: 404,
  errorMessage: "Страница не найдена.",
};

export const serverError = {
  errorCode: 500,
  errorMessage: "На сервере произошла ошибка.",
};

export const errorMessage = {
  errorInvalidMessage: "Вы ввели неправильный логин или пароль.",
  errorEmailErrorMessage: "Пользователь с таким email уже существует.",
  errorRegisterErrorMessage: "При регистрации пользователя произошла ошибка.",
  errorUpdateUserInfoMessage: "При обновлении профиля произошла ошибка.",
};

export const moviesRenderCountConfig = {
  desktopWidthCount: 7,
  mobileWidthCount: 5,
  moreRenderDesktopWidthFilmCount: 7,
  moreRenderMobileWidthFilmCount: 1,
};

export const shortFilmDuration = 40;

export const nameReg = "[a-zA-Zа-яА-Я0-9 -]{1,40}";
export const emailReg = "[a-z0-9]{2,40}@[a-z]{2,10}\\.[a-z]{2,5}";
