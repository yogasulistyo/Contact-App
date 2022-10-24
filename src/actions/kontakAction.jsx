import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: "http://localhost:3004/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3.berhasil get", response.data);
        //berhasil
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMassage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3.gagal get", error);
        //gagal
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: error.message,
          },
        });
      });
  };
};
