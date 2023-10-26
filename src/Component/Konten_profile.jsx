import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Konten_profile() {
  const { nik } = useParams(); // Mengambil nilai 'nik' dari parameter URL
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Mengambil data profil berdasarkan 'nik' dari Laravel API
    const apiUrl = `http://127.0.0.1:8000/api/biodata/${nik}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, [nik]);

  if (profileData === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <p>NIK: {profileData.nik}</p>
      <p>Nama: {profileData.nama}</p>
      {/* Tampilkan data profil lainnya */}
    </div>
  );
}

export default Konten_profile;
