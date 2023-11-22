import { useSelector } from "react-redux";
import { getStoredState } from "redux-persist";

export const TOKEN = "TOKEN";
export const GET_CLIENTI = "GET_CLIENTI";

const baseEndPoint = "http://localhost:3001";

export const RegisterProfile = (data) => {
  return async () => {
    console.log(data);
    try {
      let resp = await fetch(baseEndPoint + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };
};

export const LoginProfile = (data) => {
  return async (dispatch, getState) => {
    console.log(data);
    try {
      const resp = await fetch(baseEndPoint + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (resp.ok) {
        const token = await resp.json();
        dispatch({ type: TOKEN, payload: token.accessToken });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const getClienti = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(baseEndPoint + "/clienti", {
        headers: {
          Authorization: "Bearer " + getState().token.content,
        },
      });
      if (resp.ok) {
        let fetchedClienti = await resp.json();
        dispatch({ type: GET_CLIENTI, payload: fetchedClienti.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
