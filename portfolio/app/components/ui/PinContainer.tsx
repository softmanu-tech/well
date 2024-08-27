import dynamic from 'next/dynamic';

const PinContainerClient = dynamic(() => import('./PinContainerClient'), {
  ssr: false
});

export default PinContainerClient;
      
