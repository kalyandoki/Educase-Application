import React, { useState } from "react";
import ProfilePage from "../pages/ProfilePage"; // Assuming ProfilePage is in the same directory

const SignUpPage = () => {
  const [isAgency, setIsAgency] = useState("yes");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [signupData, setSignupData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", signupData);
    setSignupData({
      name: signupData.name,
      phone: signupData.phone,
      email: signupData.email,
      password: signupData.password,
      companyName: signupData.companyName,
      isAgency: isAgency,
    });
    setFormSubmitted(true);
  };

  return (
    <>
      {formSubmitted ? (
        <ProfilePage signupData={signupData} isAgency={isAgency} />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-[400px]">
            <h2 className="text-2xl font-semibold text-left mb-6">
              Create your PopX account
            </h2>
            <form
              onSubmit={handleSubmit}
              className="text-gray-800 text-md mb-6 text-left"
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                  required
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({ ...signupData, name: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                  required
                  value={signupData.phone}
                  onChange={(e) =>
                    setSignupData({ ...signupData, phone: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                  required
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                    required
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({ ...signupData, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
                  required
                  value={signupData.companyName}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      companyName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Are you an agency?<span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-4 mt-1">
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="agency"
                      value="yes"
                      checked={isAgency === "yes"}
                      onChange={() => setIsAgency("yes")}
                      className="text-blue-500"
                      required
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="agency"
                      value="no"
                      checked={isAgency === "no"}
                      onChange={() => setIsAgency("no")}
                      className="text-blue-500"
                      required
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6C25FF] text-white mt-12 py-3 rounded-lg font-semibold hover:bg-[rgb(18,0,57)] transition"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpPage;
