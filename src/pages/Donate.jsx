import React from 'react'

    export default function Donate() {
      return (
        <div className="min-h-screen pt-20 bg-white">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Support MYAC</h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-700 mb-8">
                Your contribution helps us empower youth through leadership, education, and sustainable development initiatives. Together, we can create a sustainable future for Makueni's youth.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Donate via MPESA</h2>
                <p className="text-gray-700 mb-4">
                  To donate via MPESA, follow these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-700 mb-4">
                  <li>Go to your MPESA menu.</li>
                  <li>Select "Lipa na MPESA."</li>
                  <li>Choose "Pay Bill."</li>
                  <li>Enter the Business Number: <strong>123456</strong> (replace with your actual MPESA Till number).</li>
                  <li>Enter the Account Number: <strong>MYAC</strong>.</li>
                  <li>Enter the amount you wish to donate.</li>
                  <li>Confirm the transaction.</li>
                </ol>
                <p className="text-gray-700">
                  Thank you for your support!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
