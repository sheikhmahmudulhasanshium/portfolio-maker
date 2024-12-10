// components/ApiProvider.tsx

'use client';

import React, { ReactNode, useState } from 'react';
import { CopyIcon } from 'lucide-react'; 
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type ApiProviderProps = {
  custom_form?: ReactNode;
  providerName: ReactNode;
  link: string;
  description: ReactNode;
  additional?: ReactNode; 
};

const ApiProvider: React.FC<ApiProviderProps> = ({ providerName, link, description, additional,custom_form }) => {
  const [showAdditional, setShowAdditional] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link);
    alert('Link copied to clipboard!');
  };

  return (
    <Card  className="p-4 shadow-md bg-primary-foreground  w-10/12 max-w-2xl" >
      <h2 className="text-xl font-bold">{providerName}</h2>
      <div className="my-4">
        <p className="text-accent-background font-mono">{description}</p>
      </div>

      <div className="mt-2 flex items-center">
        <Input value={link} readOnly className="text-sm " />
        <Button onClick={handleCopyClick} className="ml-2">
          <CopyIcon size={16} />
        </Button>
      </div>
      {
        custom_form&&(
          <>{custom_form}</>
        )
      }
      
      {additional && (
        <div className="mt-4">
          <Button onClick={() => setShowAdditional(!showAdditional)} variant="secondary" size={"lg"}>
            {showAdditional ? '- See Less' : '+ See More'}
          </Button>
          {showAdditional && (
            <div className="mt-2 text-sm text-gray-600 w-full text-justify">{additional}</div> // Displaying additional content as text
          )}
        </div>
      )}
    </Card>
  );
};

export default ApiProvider;
