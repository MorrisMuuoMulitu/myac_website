import React, { useState } from 'react'

    export default function Register() {
      const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        subcounty: '',
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
                <select
                  name="subcounty"
                  className="w-full p-2 border rounded-lg"
                  value={formData.subcounty}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Subcounty</option>
                  <option value="Kaiti">Kaiti</option>
                  <option value="Kilome">Kilome</option>
                  <option value="Kibwezi East">Kibwezi East</option>
                  <option value="Kibwezi West">Kibwezi West</option>
                  <option value="Makueni">Makueni</option>
                  <option value="Mbooni">Mbooni</option>
                </select>
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
