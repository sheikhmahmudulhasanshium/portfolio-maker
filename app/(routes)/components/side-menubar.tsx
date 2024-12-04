"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Check, ChevronsUpDown, X } from "lucide-react"; 
import * as React from "react";

const options = ['person', 'project', 'sub-project', 'review'];
const actionButtons = [
  "Read Rows",
  "Filtering",
  "Insert Rows",
  "Update Rows",
  "Delete Rows",
];

interface SideMenubarProps {
  isCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenubar: React.FC<SideMenubarProps> = ({ isCollapsed, setIsSidebarCollapsed }) => {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(prev => (prev === option ? null : option));
    setOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev); // Toggle the state
  };

  return (
    <div className={`relative ${isCollapsed ? 'w-16' : 'w-64'} h-screen transition-all shadow-lg`}>
      {/* Toggle Button inside the sidebar */}
      <Button
        variant="outline"
        onClick={toggleSidebar}
        className={`absolute top-4  p-2 transition-transform duration-300 ${isCollapsed ? 'rotate-0 left-12' : 'left-52 rotate-180'}`}
      >
        {/* Conditional rendering of icons */}
        {isCollapsed ? <BookOpen className="opacity-60" /> : <X className="opacity-50" />}
      </Button>

      <div className={`flex flex-col h-full p-4 space-y-4 ${isCollapsed ? 'hidden' : 'block'}`}>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">API Docs</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p>Tables & Views</p>
              <Separator />
              {/* Combobox */}
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between text-left p-2 border border-gray-300 rounded-md"
                  >
                    {selectedOption
                      ? selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)
                      : "Select an option..."}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Search option..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No option found.</CommandEmpty>
                      <CommandGroup>
                        {options.map((option) => (
                          <CommandItem
                            key={option}
                            value={option}
                            onSelect={() => handleOptionSelect(option)}
                          >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                            <Check
                              className={`ml-auto ${selectedOption === option ? "opacity-100" : "opacity-0"}`}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Separator />
              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                {actionButtons.map((label) => (
                  <Button key={label} variant="link" className="w-full text-left">
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SideMenubar;
