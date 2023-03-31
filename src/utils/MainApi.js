class MainApi {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  register = ({ name, email, password }) => {
    return fetch(`${this._baseURL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResult);
  };

  authorize = ({ password, email }) => {
    return fetch(`${this._baseURL}/signin`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ password, email }),
    }).then(this._checkResult);
  };

  logOut = () => {
    return fetch(`${this._baseURL}/signout`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  };

  getSavedMovies = () => {
    return fetch(`${this._baseURL}/movies`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  };

  getUserInfo = () => {
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  };

  changeUserInfo = ({ name, email }) => {
    return fetch(`${this._baseURL}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then(this._checkResult);
  };

  createMovie = ({
    id,
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
  }) => {
    return fetch(`${this._baseURL}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        movieId: id,
        country,
        director,
        duration,
        year,
        description,
        trailerLink,
        nameRU,
        nameEN,
        image: `https://api.nomoreparties.co${image.url}`,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
      }),
    }).then(this._checkResult);
  };

  removeMovie = ({ _id }) => {
    return fetch(`${this._baseURL}/movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResult);
  };
}

const api = new MainApi({
  baseURL: "https://api.diploma.prokhorov.nomoredomainsclub.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
