import React from 'react';

interface BodyProviderProps {
  menubar?: React.ReactNode;
  title: React.ReactNode;
  content: React.ReactNode;
  additionalContent?: React.ReactNode;
  isSidebarCollapsed: boolean;  // New prop to pass the collapsed state
}

const BodyProvider: React.FC<BodyProviderProps> = ({
  title,
  content,
  additionalContent,
  menubar,
  isSidebarCollapsed,
}) => {
  return (
    <div className="flex flex-wrap gap-6 p-4 w-full justify-center">
      {menubar && (
        <div className={`transition-all w-full sm:full md:4/12 lg:4/12 p-0 m-0 rounded-xl ${isSidebarCollapsed ? 'w-1/12' : 'w-64'} `}>
          {menubar}
        </div>
      )}

      <div className={`flex-1  space-y-6 ${isSidebarCollapsed ? 'w-full shrink-0 flex flex-col' : 'w-full'}`}>
        <h1 className="text-3xl font-serif font-light text-center">{title}</h1>
        <div className="w-full text-center">{content}</div>

        {additionalContent && (
          <div className="additional-content p-4 mt-6">
            {additionalContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyProvider;
