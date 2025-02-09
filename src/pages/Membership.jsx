import React, { useState } from "react";

export default function Membership() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    idNumber: "",
    gender: "",
    subCounty: "",
    ward: "",
    interests: [],
    motivation: "",
    submitted: false, // Added submitted state
  });

  const [wards, setWards] = useState([]);

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

    if (name === "subCounty") {
      setWards(subCountiesAndWards[value] || []);
      setFormData(prevData => ({ ...prevData, ward: "" })); // Reset ward when sub-county changes
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Membership Application Submitted:", formData);
    setFormData(prevData => ({ ...prevData, submitted: true })); // Set submitted to true

    // Simulate form submission success and reset form after a delay
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        idNumber: "",
        gender: "",
        subCounty: "",
        ward: "",
        interests: [],
        motivation: "",
        submitted: false,
      });
      setWards([]); // Clear wards
    }, 3000); // Reset after 3 seconds - adjust as needed
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Join Makueni Youth Advisory Council (MYAC)
        </h1>
        <p className="text-center text-gray-700 mb-12 leading-relaxed">
          All members are equal. Fill out the form below to become part of our
          community.
        </p>

        {/* Membership Form */}
        {!formData.submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <fieldset className="form-fieldset">
              <legend className="form-legend">Personal Information</legend>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="form-label"
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
                  className="input-field"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="form-label"
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
                  className="input-field"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="form-label"
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
                  className="input-field"
                />
              </div>

              {/* ID Number */}
              <div>
                <label
                  htmlFor="idNumber"
                  className="form-label"
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
                  className="input-field"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="form-label">
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
            </fieldset>


            <fieldset className="form-fieldset">
              <legend className="form-legend">Location Information</legend>
              {/* Sub-County */}
              <div>
                <label
                  htmlFor="subCounty"
                  className="form-label"
                >
                  Sub-County
                </label>
                <select
                  id="subCounty"
                  name="subCounty"
                  value={formData.subCounty}
                  onChange={handleChange}
                  required
                  className="input-field"
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
                  className="form-label"
                >
                  Ward
                </label>
                <select
                  id="ward"
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  required
                  className="input-field"
                >
                  <option value="" disabled>
                    Select your ward
                  </option>
                  {wards.map((ward) => (
                    <option key={ward} value={ward}>
                      {ward}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>


            <fieldset className="form-fieldset">
              <legend className="form-legend">Interests and Motivation</legend>
              {/* Interests */}
              <div>
                <label className="form-label">
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
                  className="form-label"
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
                  className="input-field"
                ></textarea>
              </div>
            </fieldset>


            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full"
            >
              Submit Application
            </button>
          </form>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="confirmation-message mx-auto max-w-md">
              <p className="font-bold">Thank you for your application!</p>
              <p>We have received your membership application and will be in touch soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
