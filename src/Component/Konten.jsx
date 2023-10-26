import React, { useEffect, useState } from "react";
import '../css/style.css'
import { Link } from "react-router-dom";

function Konten() {

    const apiUrl = 'http://127.0.0.1:8000/api/biodata';

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
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NIK</th>
                            <th>Nama</th>
                            <th>Jenis Kelamin</th>
                            <th>Nip</th>
                            <th>Tempat Lahir</th>
                            <th>Tanggal Lahir</th>
                            <th>Kartu Pegawai</th>
                        </tr>
                    </thead>
                    
                        {data.map((item) => (
                            <tbody key={item.nik}>
                                <tr>
                                    <th>1</th>
                                    <td>{item.nama}</td>
                                    <td>{item.nik}</td>
                                    <td>{item.jenis_kelamin}</td>
                                    <td>{item.nip}</td>
                                    <td>{item.tempat_lahir}</td>
                                    <td>{item.tanggal_lahir}</td>
                                    <td>{item.kartu_pegawai}</td>
                                    <td>
                                        <Link to={`/profile/${item.nik}`}>Profile</Link>
                                    </td>
                                </tr>
                            </tbody>
                        ))
                    }

                        < tfoot >
                        <tr>
                            <th></th>
                            <th className="white_foot">Name</th>
                            <th className="white_foot">Job</th>
                            <th className="white_foot">company</th>
                            <th className="white_foot">location</th>
                            <th className="white_foot">Last Login</th>
                            <th className="white_foot">Favorite Color</th>
                        </tr>
                    </tfoot>
            </table>
        </div>
        </div >
    )
}

export default Konten;

