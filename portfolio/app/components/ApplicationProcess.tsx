import React, { useState } from 'react';
import { X, User, GraduationCap, Briefcase, FileText, Send } from 'lucide-react';

interface Job {
  title: string;
}

interface ApplicationProcessProps {
  job: Job;
  onClose: () => void;
}

const ApplicationProcess: React.FC<ApplicationProcessProps> = ({ job, onClose }) => {
  const [step, setStep] = useState(0);
  const steps = ['Personal Information', 'Education', 'Upload Documents', 'Experience', 'Submit Application'];

  const nextStep = () => setStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 0));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col items-center ${
                  i <= step ? 'text-blue-500' : 'text-gray-400'
                }`}
              >
                {i === 0 && <User />}
                {i === 1 && <GraduationCap />}
                {i === 2 && <FileText />}
                {i === 3 && <Briefcase />}
                {i === 4 && <Send />}
                <span className="text-xs mt-1">{s}</span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-6">
          {step === 0 && (
            <div className="space-y-4">
              <input className="w-full p-2 border rounded" placeholder="Full Name" />
              <input className="w-full p-2 border rounded" placeholder="Email" />
              <input className="w-full p-2 border rounded" placeholder="Phone" />
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <input className="w-full p-2 border rounded" placeholder="Highest Degree" />
              <input className="w-full p-2 border rounded" placeholder="Institution" />
              <input className="w-full p-2 border rounded" placeholder="Graduation Year" />
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <input type="file" className="w-full p-2 border rounded" />
              <input type="file" className="w-full p-2 border rounded" />
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <input className="w-full p-2 border rounded" placeholder="Most Recent Job Title" />
              <input className="w-full p-2 border rounded" placeholder="Company" />
              <textarea className="w-full p-2 border rounded" placeholder="Job Description"></textarea>
            </div>
          )}
          {step === 4 && (
            <div className="text-center">
              <p>Review your application and click submit when ready.</p>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevStep}
            className={`px-4 py-2 rounded ${
              step === 0 ? 'bg-gray-300 text-gray-500' : 'bg-blue-500 text-white'
            }`}
            disabled={step === 0}
          >
            Previous
          </button>
          <button
            onClick={step === steps.length - 1 ? onClose : nextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {step === steps.length - 1 ? 'Submit Application' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;