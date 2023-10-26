import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Konten_profile() {
  const apiUrl = 'http://127.0.0.1:8000/api/biodata/{id}';

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((responseData) => {
                setData(responseData.data);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [apiUrl]);

  return (
    <div className="Konten">
    <div className="flex justify-center items-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
        {/* <figure><img src="../../Image/default_image.png" alt="Shoes" /></figure> */}
        {data.map((item) => (
        <div className="card-body">
          <h2 className="card-title">
            <p key={item.nik}>{item.nama}</p>
          </h2>
          <p>Jenis Kelamin : Laki Laki</p>
          <p  key={item.nik}>{item.nik}</p>
          <p>NIP           : 567896789</p>
          <p>Tempat Lahir : Bandung </p>
          <p>Tanggal Lahir : 01-08-2005</p>
          <p>Kartu Pegawai : Kh578</p>
          <p>Jabat : Kesiswaan</p>
        </div>
       ))}
      </div>
  </div>
  </div>
  );
}

export default Konten_profile;
