import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const setZIndex = (classList) => ({
  type: "SET_Z_INDEX",
  classList,
});

export const initZIndex = (collection) => ({
  type: "INIT_Z_INDEX",
  collection,
});

export const saveScore = (score) => {
  return function action(dispatch) {
    const request = axios({
      method: "POST",
      url: `/updatesnakescore`,
      data: {
        score: score,
        key: process.env.REACT_APP_KEY,
      },
    });
    return request.then(
      (response) => dispatch(saveScoreToStore(score)),
      (err) => dispatch(saveScoreToStore(score))
    );
  };
};

export const saveScoreToStore = (score) => ({
  type: "SAVE_SCORE",
  score,
});

export const loadScore = () => {
  return function action(dispatch) {
    const request = axios({
      method: "GET",
      url: `/loadsnakescore`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return request.then(
      (response) => dispatch(loadScoreSucces(response)),
      (err) => console.log(err)
    );
  };
};

export const loadScoreSucces = (response) => ({
  type: "LOAD_SCORE_SUCCES",
  response,
});

export const handleSubmit = (e) => ({
  type: "FORM_SUBMIT",
  e,
});
