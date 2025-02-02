import React from "react";

export default function Donate() {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Support MYAC
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Your contribution helps us empower youth through leadership,
          education, and sustainable development initiatives. Together, we can
          create a sustainable future for Makueni's youth.
        </p>

        {/* Donation Instructions */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
          {/* MPESA Donation Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Donate via MPESA
            </h2>
            <p className="text-gray-700 mb-4">
              To donate via MPESA, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Go to your MPESA menu.</li>
              <li>Select "Lipa na MPESA."</li>
              <li>Choose "Pay Bill."</li>
              <li>
                Enter the Business Number: <strong>522533</strong> or{" "}
                <strong>522522</strong>.
              </li>
              <li>
                Enter the Account Number:
                <ul className="list-disc list-inside ml-4">
                  <li>
                    For Business Number <strong>522533</strong>, use Account
                    Number: <strong>7729915</strong>.
                  </li>
                  <li>
                    For Business Number <strong>522522</strong>, use Account
                    Number: <strong>1320903576</strong>.
                  </li>
                </ul>
              </li>
              <li>Enter the amount you wish to donate.</li>
              <li>Confirm the transaction.</li>
            </ol>
            <p className="text-gray-700 mt-4">
              Thank you for your support! Your donation will directly contribute
              to empowering Makueni's youth.
            </p>
          </div>

          {/* Bank Donation Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Donate via Bank Transfer
            </h2>
            <p className="text-gray-700 mb-4">
              You can also donate directly to our bank account:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Account Name:</strong> Makueni Youth Advisory Group CBO
              </li>
              <li>
                <strong>Bank:</strong> KCB - TRM BRANCH
              </li>
              <li>
                <strong>Account Number:</strong> 1320903576
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Please include your name or organization in the transaction
              reference so we can acknowledge your contribution.
            </p>
          </div>

          {/* Thank You Message */}
          <div className="text-center">
            <p className="text-lg font-semibold text-primary">
              Every Contribution Counts!
            </p>
            <p className="text-gray-700">
              Together, we are building a brighter future for Makueni's youth.
              Thank you for supporting MYAC.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
