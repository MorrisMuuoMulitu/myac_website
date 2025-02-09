import React from "react";
import mpesaIconUrl from '../assets/mpesa.svg';
import bankIconUrl from '../assets/bank.svg';
import { FaHandHoldingHeart } from 'react-icons/fa';

const DonateIcon = ({ iconUrl, alt }) => {
  return <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white">
    <img src={iconUrl} alt={alt} className="h-6 w-6" />
  </span>;
};

export default function Donate() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Title Section */}
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Support MYAC
        </h1>
        <p className="text-center text-gray-700 mb-12 leading-relaxed">
          Your contribution helps us empower youth through leadership,
          education, and sustainable development initiatives. Together, we can
          create a sustainable future for Makueni's youth.
        </p>

        {/* Impact Statement */}
        <section className="text-center mb-16 max-w-2xl mx-auto">
          <FaHandHoldingHeart className="donate-method-icon mx-auto" style={{ fontSize: '3em' }} />
          <h2 className="text-2xl font-semibold text-primary mb-4">Your Donation Makes a Difference</h2>
          <p className="text-gray-700 leading-relaxed">
            Every donation, no matter the size, directly supports our programs and initiatives. 
            Help us provide training, resources, and opportunities for the youth of Makueni County.
          </p>
        </section>

        {/* Donate Now Button - Anchor Link */}
        <div className="text-center mb-12">
          <a href="#donation-methods">
            <button className="btn-primary">Donate Now</button>
          </a>
        </div>


        {/* Donation Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="donation-methods">
          {/* MPESA Donation */}
          <div className="donate-method">
            <div className="flex items-center mb-4">
              <DonateIcon iconUrl={mpesaIconUrl} alt="MPESA Icon" />
              <h2 className="text-2xl font-semibold ml-3 text-primary">MPESA</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Donate quickly and easily via MPESA Paybill. Follow these simple steps:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-4">
              <li>Go to your MPESA menu on your phone.</li>
              <li>Select "Lipa na MPESA."</li>
              <li>Choose "Pay Bill."</li>
              <li>
                Select Business Number Option and enter: <strong>522533</strong>
                <p className="mt-2">
                  Account Number: <code className="font-semibold">7729915</code>
                </p>
              </li>
              <li>
                Alternatively, select Business Number Option and enter: <strong>522522</strong>
                 <p className="mt-2">
                  Account Number: <code className="font-semibold">1320903576</code>
                </p>
              </li>
              <li>Enter the amount you wish to donate.</li>
              <li>Confirm the transaction by entering your MPESA PIN.</li>
            </ol>
          </div>

          {/* Bank Transfer Donation */}
          <div className="donate-method">
            <div className="flex items-center mb-4">
              <DonateIcon iconUrl={bankIconUrl} alt="Bank Icon" />
              <h2 className="text-2xl font-semibold ml-3 text-primary">Bank Transfer</h2>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Make a direct bank transfer to support our cause. Here are our bank details:
            </p>
            <div className="text-gray-700 space-y-2">
              <p><strong>Account Name:</strong> Makueni Youth Advisory Group CBO</p>
              <p><strong>Bank:</strong> KCB - TRM BRANCH</p>
              <p><strong>Account Number:</strong> 1320903576</p>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Please include your name or organization in the transaction reference so we can acknowledge your generous contribution.
            </p>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <p className="text-lg font-semibold text-primary mb-2">
            Every Contribution Counts!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your support empowers Makueni's youth to lead and innovate. Thank you for being a part of our mission.
          </p>
        </div>
      </div>
    </div>
  );
}
