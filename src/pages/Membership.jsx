import React from 'react'

    export default function Membership() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Membership</h1>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Benefits</h2>
              <ul className="list-disc list-inside text-gray-700 mb-8">
                <li>Voting rights in MYAC elections</li>
                <li>Access to exclusive resources</li>
                <li>Leadership opportunities</li>
              </ul>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-secondary text-white p-2 rounded-lg"
                >
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      )
    }
