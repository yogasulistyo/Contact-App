import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

const ListKontak = () => {
  const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getlistkontak
    console.log("1.use effect component did mount");
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp}
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "data kosong"}</p>
      )}
    </div>
  );
};

export default ListKontak;
