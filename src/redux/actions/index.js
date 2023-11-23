export const GET_FATTURE = "GET_FATTURE";
export const DELETE_FATTURA = "DELETE_FATTURA";

const baseEndPoint = "http://localhost:3001/fatture";

// const headers = {
//   headers: {
//     Authorization: "Bearer ",
//   },
// };

export const fetchFatture = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(baseEndPoint, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzAwNzI5NDUzLCJleHAiOjE3MDEzMzQyNTN9.60Gb5CcjzJB1zsJyCXzEXMqwXaalAp6izPeb4YuwEB4",
        },
      });
      if (resp.ok) {
        let myFattureFetched = await resp.json();
        dispatch({ type: GET_FATTURE, payload: myFattureFetched });
      } else {
        console.log("error");
        alert("Errore nel reperimento dei dati 'fatture' ");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const handleDeleteFattura = async (id) => {
  try {
    const response = await fetch(baseEndPoint + "/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzAwNzI5NDUzLCJleHAiOjE3MDEzMzQyNTN9.60Gb5CcjzJB1zsJyCXzEXMqwXaalAp6izPeb4YuwEB4",
      },
    });
    if (response.ok) {
      alert("Fattura Eliminata con successo!");
    }
  } catch (error) {
    console.log(error);
  }
};
