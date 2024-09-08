import React, { useState, useTransition } from 'react';
import StatusMessage from './StatusMessage';
import { sendMailAction } from '@/actions/ats.sendmail';
import { Input } from './ui/Input';

export interface QuoteFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  phone: string;
}

const QuoteRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    service: '',
    message: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [isPending, startTransition] = useTransition();
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      sendMailAction(formData)
        .then((res) => {
          console.log(res);
          if (res?.error) {
            setError(res.error);
          } else if (res?.success) {
            setSuccess(true);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="relative flex items-center justify-center px-6 py-10 rounded-full lg:py-5 bg-gradient-to-br from-purple to-indigo-600">
      <div className="absolute inset-0 rounded-full backdrop-blur-md"></div>
      <div className="relative  max-w-md mx-auto">
        <form onSubmit={onSubmit} className="bg-slate-100 bg-opacity-20  rounded-full px-8 py-6 backdrop-filter backdrop-blur-lg">
          <h2 className="text-1xl sm:text-3xl font-bold mb-6 text-center text-white">Request Quote</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <Input
                className="w-full px-3 py-2 bg-purple bg-opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                id="name"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <Input
                className="w-full px-3 py-2 bg-purple bg-opacity-50  rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="phone">
                Contact
              </label>
              <Input
                className="w-full px-3  py-2 bg-purple bg-opacity-50 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                id="phone"
                type="tel"
                placeholder="Your Contact"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
           
            <div>
              <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 bg-purple bg-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-purple"
                id="message"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center">
            <StatusMessage isLoading={isPending} error={error} success={success} />
            <button
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-colors duration-300"
              type="submit"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteRequestForm;