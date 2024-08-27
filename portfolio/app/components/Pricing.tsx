"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Define types for the pricing plans
interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonAction: () => void;
}

// Define the props for the PricingCard component
interface PricingCardProps {
  plan: PricingPlan;
}

// PricingCard component
const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-purple rounded-lg shadow-lg p-6 flex flex-col h-full"
    >
      <h2 className="text-xl font-semibold text-white mb-2">{plan.title}</h2>
      <h3 className="text-3xl font-bold text-white mb-4">{plan.price}</h3>
      <p className="text-black mb-6">{plan.description}</p>
      <ul className="space-y-2 mb-6 flex-grow">
        {plan.features.map((feature, index) => (
          <li className="flex items-center"  key={index}>{feature}</li>
        ))}
      </ul>
      <button onClick={plan.buttonAction}
      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        {plan.buttonText}</button>
    </motion.div>
  );
};

// Main Pricing component
const Pricing: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "This is PRICING SECTION",
      price: "Still on construction",
      description: "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience.",
        "MIT Licence. Personal or commercial projects.",
        "Contact over chat for support"
      ],
      buttonText: "Campaing",
      buttonAction: () => console.log("Browse Components clicked")
    },
    {
      title: "This is PRICING SECTION",
      price: "Still on construction",
      description: "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience.",
        "MIT Licence. Personal or commercial projects.",
        "Contact over chat for support"
      ],
      buttonText: "Campaing",
      buttonAction: () => console.log("Browse Components clicked")
    },
    {
      title: "This is PRICING SECTION",
      price: "Still on construction",
      description: "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience.",
        "MIT Licence. Personal or commercial projects.",
        "Contact over chat for support"
      ],
      buttonText: "Campaing",
      buttonAction: () => console.log("Browse Components clicked")
    },
    {
      title: "This is PRICING SECTION",
      price: "Still on construction",
      description: "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience.",
        "MIT Licence. Personal or commercial projects.",
        "Contact over chat for support"
      ],
      buttonText: "Campaing",
      buttonAction: () => console.log("Browse Components clicked")
    },
    // Add other pricing plans here...
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;