"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useAddPersonInfo } from "@/components/hooks/person/add";
import { Person, } from "@/lib/types";

// Zod schema for validation
const personFormSchema = z.object({
  full_name: z.string().min(3, { message: "Full name must be at least 3 characters long" }),
  nick_name: z.string().min(3, { message: "Nick name must be at least 3 characters long" }),
  phone: z
    .string()
    .regex(
      /^[+]?[\d\s-]+$/,
      { message: "Phone number must only contain digits, spaces, '-', or start with '+'" }
    )
    .min(10, { message: "Phone number must be at least 10 characters long" })
    .max(20, { message: "Phone number cannot exceed 20 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  designation: z.string().optional(),
  work_description: z.string().optional(),
});

// Use the `Person` interface as the expected type

export const AddPersonForm = () => {
  const form = useForm<z.infer<typeof personFormSchema>>({
    resolver: zodResolver(personFormSchema),
    defaultValues: {
      full_name: "",
      nick_name: "",
      phone: "",
      email: "",
      designation: "",
      work_description: "",
    },
  });

  const { addPerson, loading, successMessage, errorMessage } = useAddPersonInfo();

  const onSubmit = async (values: z.infer<typeof personFormSchema>) => {
    // Add `id` and `created_at` to match `Person` interface
    const person: Person = {
      ...values,
      id: BigInt(Date.now()), // Example: Generate a unique ID
      created_at: new Date(), // Use current date/time
    };

    await addPerson(person);
    if (!errorMessage) form.reset();
  };

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-6 my-4 gap-3 flex flex-col shadow px-8 rounded-2xl w-full">
        <FormLabel className="text-xl py-2">Enter Information</FormLabel>
        {/* Full Name */}
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Name <span className="text-red-500">*required</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Nick Name */}
        <FormField
          control={form.control}
          name="nick_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nick Name <span className="text-red-500">*required</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter nick name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone <span className="text-red-500">*required</span>
              </FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email <span className="text-red-500">*required</span>
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Designation */}
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Designation <span className="text-gray-500">*optional</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter designation" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Work Description */}
        <FormField
          control={form.control}
          name="work_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Work Description <span className="text-gray-500">*optional</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter work description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Submitting..." : "Submit"}
        </Button>

        {/* Success and Error Messages */}
        {successMessage && <p className="text-sm text-green-500 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-sm text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </Form>
  );
};
