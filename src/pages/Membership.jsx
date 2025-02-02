import React, { useState } from "react";

export default function Membership() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    idNumber: "",
    gender: "",
    subCounty: "",
    ward: "", // Changed to text input
    interests: [],
    motivation: "",
  });

  // Sub-counties and their corresponding wards
  const subCountiesAndWards = {
    Mbooni: [
      "Tulimani",
      "Mbooni",
      "Kithungo/Kitundu",
      "Kiteta/Kisau",
      "Waia-Kako",
      "Kalawa",
    ],
    Makueni: [
      "Wote",
      "Muvau/Kikuumini",
      "Mavindini",
      "Kitise/Kithuki",
      "Kathonzweni",
      "Nzau/Kilili/Kalamba",
      "Mbitini",
    ],
    Kaiti: ["Ukia", "Kee", "Kilungu", "Ilima"],
    "Kibwezi West": [
      "Makindu",
      "Nguumo",
      "Kikumbulyu North",
      "Kikumbulyu South",
      "Nguu/Masumba",
      "Emali/Mulala",
    ],
    "Kibwezi East": [
      "Masongaleni",
      "Mtito Andei",
      "Thange",
      "Ivingoni/Nzambani",
    ],
    Kilome: ["Kasikeu", "Mukaa", "Kiima Kiu/Kalanzoni"],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership Application Submitted:", formData);
    alert("Thank you for applying! Your application has been submitted.");
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      idNumber: "",
      gender: "",
      subCounty: "",
      ward: "", // Reset ward input
      interests: [],
      motivation: "",
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Join Makueni Youth Advisory Council (MYAC)
        </h1>
        <p className="text-center text-gray-700 mb-12">
          All members are equal. Fill out the form below to become part of our
          community.
        </p>

        {/* Membership Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold text-primary">
            Personal Information
          </h2>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* ID Number */}
          <div>
            <label
              htmlFor="idNumber"
              className="block text-sm font-medium text-gray-700"
            >
              National ID Number
            </label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              placeholder="Enter your national ID number"
              value={formData.idNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <div className="mt-1 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                />
                <span className="ml-2 text-gray-700">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                />
                <span className="ml-2 text-gray-700">Female</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                />
                <span className="ml-2 text-gray-700">Other</span>
              </label>
            </div>
          </div>

          {/* Sub-County */}
          <div>
            <label
              htmlFor="subCounty"
              className="block text-sm font-medium text-gray-700"
            >
              Sub-County
            </label>
            <select
              id="subCounty"
              name="subCounty"
              value={formData.subCounty}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="" disabled>
                Select your sub-county
              </option>
              {Object.keys(subCountiesAndWards).map((subCounty) => (
                <option key={subCounty} value={subCounty}>
                  {subCounty}
                </option>
              ))}
            </select>
          </div>

          {/* Ward */}
          <div>
            <label
              htmlFor="ward"
              className="block text-sm font-medium text-gray-700"
            >
              Ward
            </label>
            <select
              id="ward"
              name="ward"
              value={formData.ward}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            >
              <option value="" disabled>
                Select your ward
              </option>
              {formData.subCounty &&
                subCountiesAndWards[formData.subCounty].map((ward) => (
                  <option key={ward} value={ward}>
                    {ward}
                  </option>
                ))}
            </select>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Areas of Interest
            </label>
            <div className="mt-1 space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="leadership"
                  checked={formData.interests.includes("leadership")}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Leadership</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="agriculture"
                  checked={formData.interests.includes("agriculture")}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Agriculture</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="education"
                  checked={formData.interests.includes("education")}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Education</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="interests"
                  value="technology"
                  checked={formData.interests.includes("technology")}
                  onChange={handleChange}
                  className="focus:ring-primary h-4 w-4 text-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-700">Technology</span>
              </label>
            </div>
          </div>

          {/* Motivation */}
          <div>
            <label
              htmlFor="motivation"
              className="block text-sm font-medium text-gray-700"
            >
              Why do you want to join MYAC?
            </label>
            <textarea
              id="motivation"
              name="motivation"
              rows="4"
              placeholder="Tell us about your motivation..."
              value={formData.motivation}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
