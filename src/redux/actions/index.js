export const GET_FATTURE = "GET_FATTURE";

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
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNzAwNTc0MjYxLCJleHAiOjE3MDExNzkwNjF9.3e4uw2V3-ECTm3CeD8xx8SzAwKN2qPf3zamSY-NNVek",
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
