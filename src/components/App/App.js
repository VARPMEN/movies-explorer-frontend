import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import api from "../../utils/MainApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Layout from "../Layout/Layout";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ErrorRoute from "../ErrorRoute/ErrorRoute";
import moviesApi from "../../utils/MoviesApi";
import {
  NOTFOUND_ERROR,
  SERVER_ERROR,
  ERROR_MESSAGES,
} from "../../utils/constans";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSuccess, setIsSuccess] = useState(
    localStorage.getItem("isSuccess") != null
      ? localStorage.getItem("isSuccess") === "true" && true
      : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function navigateServerErrorPage() {
    navigate("/server-error");
  }

  useEffect(() => {
    if (isSuccess) {
      navigate("/movies");
      setIsLoading(true);
      Promise.all([
        moviesApi.getMovies(),
        api.getSavedMovies(),
        api.getUserInfo(),
      ])
        .then((data) => {
          setMovies(data[0]);
          setSavedMovies(data[1]);
          setCurrentUser(data[2]);
        })
        .catch(() => navigateServerErrorPage())
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isSuccess]);

  function handleLoginUser(data, stateButton, stateMessage) {
    api
      .authorize(data)
      .then(() => {
        setIsSuccess(true);
        localStorage.setItem("isSuccess", true);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 401) {
          stateMessage(ERROR_MESSAGES.errorInvalidMessage);
        } else {
          navigateServerErrorPage();
        }
      });
  }

  function handleRegisterUser(data, stateButton, stateMessage) {
    api
      .register(data)
      .then(() => {
        handleLoginUser(data);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 409) {
          stateMessage(ERROR_MESSAGES.errorEmailErrorMessage);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          stateMessage(ERROR_MESSAGES.errorRegisterErrorMessage);
        }
      });
  }

  function handleChangeUserInfo(data, stateButton, stateMessage) {
    api
      .changeUserInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 409) {
          stateMessage(ERROR_MESSAGES.errorEmailErrorMessage);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          stateMessage(ERROR_MESSAGES.errorUpdateUserInfoMessage);
        }
      });
  }

  function handleLogOut() {
    api
      .logOut()
      .then(() => {
        localStorage.clear();
        setIsSuccess(false);
      })
      .catch(() => navigateServerErrorPage());
  }

  function handleSavedMovie(data) {
    api
      .createMovie(data)
      .then((movie) => {
        setSavedMovies((movies) => {
          return [...movies, movie];
        });
      })
      .catch(() => navigateServerErrorPage());
  }

  function handleRemoveMovie(data) {
    const movie = savedMovies.find((movie) => movie.movieId === data.id);
    api
      .removeMovie(movie)
      .then((movie) => {
        setSavedMovies((movies) => {
          return movies.filter((film) => film._id !== movie._id);
        });
      })
      .catch(() => navigateServerErrorPage());
  }

  function handleRemoveSavedMovie(data) {
    api
      .removeMovie(data)
      .then((movie) => {
        setSavedMovies((movies) => {
          return movies.filter((film) => film._id !== movie._id);
        });
      })
      .catch(() => navigateServerErrorPage());
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path="/" element={<Layout isSuccess={isSuccess} />}>
          <Route index element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isSuccess={isSuccess}>
                <Movies
                  movies={movies}
                  onSavedClick={handleSavedMovie}
                  onRemoveClick={handleRemoveMovie}
                  isLoading={isLoading}
                  savedMovies={savedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isSuccess={isSuccess}>
                <SavedMovies
                  savedMovies={savedMovies}
                  onRemoveClick={handleRemoveSavedMovie}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isSuccess={isSuccess}>
                <Profile
                  onChangeInfoClick={handleChangeUserInfo}
                  onLogOutClick={handleLogOut}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={<Register onSubmitClick={handleRegisterUser} />}
          />
          <Route
            path="/signin"
            element={<Login onSubmitClick={handleLoginUser} />}
          />
        </Route>
        <Route
          path="/server-error"
          element={<ErrorRoute errorData={SERVER_ERROR} />}
        />
        <Route path="*" element={<ErrorRoute errorData={NOTFOUND_ERROR} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
