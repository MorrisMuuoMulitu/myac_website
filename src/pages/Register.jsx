import React, { useState } from 'react'

    export default function Register() {
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        gender: '',
        occupation: '',
        address: '',
      })

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value,
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log(formData)
      }

      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Join MYAC</h1>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded-lg"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full p-2 border rounded-lg"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full p-2 border rounded-lg"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                <select
                  name="gender"
                  className="w-full p-2 border rounded-lg"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  className="w-full p-2 border rounded-lg"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-full p-2 border rounded-lg"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-secondary text-white p-2 rounded-lg"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    }
