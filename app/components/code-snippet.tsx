'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Feature, Person,Project, SubProject } from "@/lib/types";
import { Copy, CheckCircle } from "lucide-react";

interface CodeSnippetProps {
  data: Person[]|Project[]|Feature[]|SubProject[];
  note?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ data, note }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 4)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the state after 2 seconds
    });
  };

  return (
    <div className="flex flex-col justify-between items-center w-full  py-4">
      <div className="justify-end flex w-full">
        <Button
          variant="outline"
          size="icon"
          onClick={handleCopy}
          className={`transition-colors duration-300 ${copied ? 'text-green-500' : 'text-gray-600'}`}
        >
          {copied ? <CheckCircle /> : <Copy />}
        </Button>
      </div>
      <div className="flex flex-col justify-start">
        {note && <p className="text-start w-full text-slate-500">{note}</p>}
        <pre className="text-left whitespace-pre-wrap p-4 rounded-lg shadow-md text-lime-600">
            {JSON.stringify(data, null, 4)}
        </pre>
        </div>
    </div>
  );
};

export default CodeSnippet;
