import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const ProfilePage = ({ signupData }) => {
  console.log("ProfilePage signupData:", signupData);
  const { name, email } = signupData;
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setProfileImage(imgURL);
    }
  };

  return (
    <>
      <div className="min-h-screen flex-col items-center justify-center bg-gray-100 px-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-left p-2">
          Account Settings
        </h1>
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center mb-5">
          <div className="w-full flex items-center gap-4 mb-6">
            <div className="relative w-28 h-28">
              <img
                src={
                  profileImage ||
                  "https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?ga=GA1.1.134497021.1695700831&semt=ais_items_boosted&w=740"
                }
                alt="Profile"
                className="w-full h-full object-cover rounded-full border border-gray-300"
              />

              <label htmlFor="profileUpload">
                <div className="absolute bottom-1 right-1 p-1 rounded-full cursor-pointer">
                  <div className="bg-[#6C25FF] shadow-md p-2 rounded-full">
                    <FaCamera className="text-xl text-white rounded-4" />
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="profileUpload"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </label>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-600">{email}</p>
            </div>
          </div>
          <div className="bg-gray-100 text-gray-700 text-sm p-4 rounded-md">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat,Sed Diam
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ProfilePage;
