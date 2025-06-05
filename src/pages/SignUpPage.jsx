import React, { useState, useEffect } from "react";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";

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

    const dataToStore = {
      ...signupData,
      isAgency: isAgency,
      id: new Date().toISOString(),
    };

    console.log("Form submitted with data:", dataToStore);

    localStorage.setItem("signupData", JSON.stringify(dataToStore));

    setSignupData(dataToStore);
    setSignupData({
      name: "",
      phone: "",
      email: "",
      password: "",
      companyName: "",
    });

    setIsAgency("yes");
    setFormSubmitted(true);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("signupData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setSignupData(parsedData);
      setIsAgency(parsedData.isAgency || "yes");
    }
  }, []);

  const storedSignupData = JSON.parse(localStorage.getItem("signupData"));
  <LoginPage signupData={storedSignupData} />;

  return (
    <>
      {formSubmitted ? (
        <ProfilePage signupData={storedSignupData} />
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
                <label className="block text-[#6C25FF] font-medium mb-1">
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
                <label className="block text-[#6C25FF] font-medium mb-1">
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
                <label className="block text-[#6C25FF] font-medium mb-1">
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
                <label className="block text-[#6C25FF] font-medium mb-1">
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
                <label className="block text-[#6C25FF] font-medium mb-1">
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
                <label className="block text-[#6C25FF] font-medium mb-1">
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
