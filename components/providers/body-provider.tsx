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
        <div className={`transition-all w-64 sm:full md:4/12 lg:4/12  ${isSidebarCollapsed ? 'w-12' : 'w-64'} `}>
          {menubar}
        </div>
      )}

      <div className={`flex-1 space-y-6 ${isSidebarCollapsed ? 'w-11/12' : 'w-full'}`}>
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
