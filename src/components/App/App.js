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
import { notFoundError, serverError, errorMessage } from "../../utils/constans";

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

  function handleLoginUser(
    data,
    stateButton,
    stateMessage,
    stateInputDisabled
  ) {
    stateInputDisabled(true);
    api
      .authorize(data)
      .then(() => {
        setIsSuccess(true);
        navigate("/movies");
        localStorage.setItem("isSuccess", true);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 401) {
          stateMessage(errorMessage.errorInvalidMessage);
        } else {
          navigateServerErrorPage();
        }
      })
      .finally(() => {
        stateInputDisabled(false);
      });
  }

  function handleRegisterUser(
    data,
    stateButton,
    stateMessage,
    stateInputDisabled
  ) {
    stateInputDisabled(true);
    api
      .register(data)
      .then(() => {
        handleLoginUser(data);
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 409) {
          stateMessage(errorMessage.errorEmailErrorMessage);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          stateMessage(errorMessage.errorRegisterErrorMessage);
        }
      })
      .finally(() => {
        stateInputDisabled(false);
      });
  }

  function handleChangeUserInfo(
    data,
    stateButton,
    stateMessage,
    stateInputDisabled
  ) {
    stateInputDisabled(true);
    api
      .changeUserInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        stateMessage("");
      })
      .catch((err) => {
        stateButton(false);
        if (err.status === 409) {
          stateMessage(errorMessage.errorEmailErrorMessage);
        } else if (Math.floor(err.status / 100) === 5) {
          navigateServerErrorPage();
        } else {
          stateMessage(errorMessage.errorUpdateUserInfoMessage);
        }
      })
      .finally(() => {
        stateInputDisabled(false);
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
                  isLoading={isLoading}
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
                  isLoading={isLoading}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute isSuccess={!isSuccess}>
                <Register onSubmitClick={handleRegisterUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <ProtectedRoute isSuccess={!isSuccess}>
                <Login onSubmitClick={handleLoginUser} />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route
          path="/server-error"
          element={<ErrorRoute errorData={serverError} />}
        />
        <Route path="*" element={<ErrorRoute errorData={notFoundError} />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
