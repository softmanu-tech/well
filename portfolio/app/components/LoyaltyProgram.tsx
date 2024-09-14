'use-client'
import Link from 'next/link';
import React from 'react';
import { FaMedal, FaGift, FaHandshake, FaChartLine } from 'react-icons/fa';


const LoyaltyProgram: React.FC = () => {
  const handleSignUp = () => {
    
    window.location.href = 'mailto:your-email@example.com?subject=Loyalty Program Sign-up';
  };

  return (
    

        <div className="bg-gradient-to-br from-purple to-indigo-900 min-h-screen text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-8">Elevate Your Success: Join Our Exclusive Loyalty Program</h1>
                
                <p className="text-xl text-center mb-12">
                As our esteemed partner, we&apos;re committed to recognizing and rewarding your invaluable support. 
                Embark on a journey of unprecedented benefits and opportunities!
                </p>

                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start">
                    <FaMedal className="text-yellow-400 text-3xl mr-4 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Referral Rewards</h3>
                        <p>Earn a 5% bonus from your referral&apos;s first month payment when they become our client.</p>
                    </div>
                    </div>
                    <div className="flex items-start">
                    <FaGift className="text-green-400 text-3xl mr-4 mt-1" />
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Point System</h3>
                        <p>Accumulate points for every referral and deal, redeemable for exclusive rewards and services.</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Exclusive Member Benefits</h2>
                <ul className="space-y-4">
                    <li className="flex items-center">
                    <FaChartLine className="text-blue-400 text-2xl mr-4" />
                    <span>Priority access to cutting-edge marketing strategies and product launches</span>
                    </li>
                    <li className="flex items-center">
                    <FaHandshake className="text-orange-400 text-2xl mr-4" />
                    <span>VIP invitations to high-profile networking events and expert webinars</span>
                    </li>
                    <li className="flex items-center">
                    <FaChartLine className="text-green-400 text-2xl mr-4" />
                    <span>Tailored marketing consultations to skyrocket your brand&apos;s performance</span>
                    </li>
                    <li className="flex items-center">
                    <FaGift className="text-pink-400 text-2xl mr-4" />
                    <span>Exclusive discounts across our premium marketing services</span>
                    </li>
                </ul>
                </div>

                <div className="text-center">
                <p className="text-xl mb-6">
                    Seize the opportunity to transform your loyalty into tangible success. 
                    Join our Loyalty Program today and let&apos;s redefine excellence for your brand together.
                </p>
                <Link href="/loyalty-program/signup" passHref>
                <button 
                    
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Activate Your VIP Status Now
                </button>
                
                </Link>
                </div>
            </div>
            </div>
            

    
  );
};

export default LoyaltyProgram;