import React from 'react';

interface Job {
  title: string;
  description: string;
  requirements: string[];
  applicationInstructions?: string;
  compensation?: string;
  deadline?: string;
}

const jobs: Job[] = [
  {
    title: 'Marketing Specialist',
    description: 'We are seeking a talented Marketing Specialist to join our team at Sizzle Africa Marketing Limited.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      '3+ years of experience in digital marketing',
      'Proficiency in social media management tools',
    ],
  },
  {
    title: 'Graphic Designer',
    description: 'Sizzle Africa Marketing Limited is looking for a creative Graphic Designer to bring our marketing materials to life.',
    requirements: [
      'Bachelor\'s degree in Graphic Design or related field',
      'Proficiency in Adobe Creative Suite',
      'Strong portfolio demonstrating design skills',
    ],
  },
  {
    title: 'Social Media Marketing Intern',
    description: 'Sizzle Africa Marketing Limited is seeking a talented Social Media Marketing Intern to join our dynamic team.',
    requirements: [
      'Efficient in photography',
      'Video graphing of construction sites',
      'Good editing skills',
    ],
    applicationInstructions: 'If you meet the above qualifications: send your resume and portfolio to careers@sizzleafrica.co.ke',
    compensation: '15k',
    deadline: 'Tuesday 10th Sept 2024',
  },
];

const CareersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Careers at Sizzle Africa Marketing Limited</h1>
      <p className="mb-8">Join our dynamic team and help shape the future of marketing in Africa!</p>
      
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="bg-purple shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="mb-4">{job.description}</p>
            <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.requirements.map((req, reqIndex) => (
                <li key={reqIndex}>{req}</li>
              ))}
            </ul>
            {job.applicationInstructions && (
              <p className="mb-2"><strong>How to Apply:</strong> {job.applicationInstructions}</p>
            )}
            {job.compensation && (
              <p className="mb-2"><strong>Compensation:</strong> {job.compensation}</p>
            )}
            {job.deadline && (
              <p className="mb-4"><strong>Application Deadline:</strong> {job.deadline}</p>
            )}
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersPage;