import React, { useState, useTransition } from 'react';
import StatusMessage from './StatusMessage';
import { sendMailAction } from '@/actions/ats.sendmail';
import { Label } from '@radix-ui/react-label';
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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  
  const [isPending, startTransition] = useTransition();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      sendMailAction (formData)
        .then((res) => {
          console.log(res);
          if (res?.error) {
            setError(res.error)
          
          } else if (res?.success) {
          setSuccess(true)
          }
        })
        .catch((error) => {
        
          console.error(error);
        });
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit= {onSubmit} className="bg-purple shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Quote</h2>
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </Label>
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </Label>
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Contact
          </Label>
          <Input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Your Contact"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Service
          </Label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            
            <option value="service1"> Website services </option>
            <option value="service2"> Basic Marketing Campaing </option>
            <option value="service3"> Premium Marketing Campaing </option>
          </select>
        </div>
        <div className="mb-6">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </Label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <StatusMessage isLoading={isPending} error={error} success={success} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteRequestForm;