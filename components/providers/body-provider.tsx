import React from 'react';

interface BodyProviderProps {
  navbar?: React.ReactNode; // Navbar may be there
  title: React.ReactNode; // Title can be a string or any React element
  content: React.ReactNode; // The main content can be anything (e.g., JSX, text)
  additionalContent?: React.ReactNode; // Optional additional content (can be any React element)
}

const BodyProvider: React.FC<BodyProviderProps> = ({ title, content, additionalContent,navbar }) => {
  return (
    <div className=" flex flex-col justify-between  w-full mb-16  gap-4 border">
        {navbar}
      {/* Render the title */}
      <h1 className="text-center pt-4 text-2xl font-serif font-light">{title}</h1>

      {/* Render the main content */}
      <div className="relative z-0">
        {content}
      </div>

      {/* Optionally render additional content if provided */}
      {additionalContent && (
        <div className="additional-content">
          {additionalContent}
        </div>
      )}
    </div>
  );
};

export default BodyProvider;