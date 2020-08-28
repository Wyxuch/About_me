import axios from "axios";

export const setZIndex = (classList) => ({
  type: "SET_Z_INDEX",
  classList,
});

export const initZIndex = (collection) => ({
  type: "INIT_Z_INDEX",
  collection,
});

export const saveScore = (score) => ({
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
