"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  file: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length > 0, {
      message: "Please upload a file.",
    })
    .refine((fileList) => fileList[0].size > 0, {
      message: "File must not be empty.",
    })
    .refine((fileList) => ["text/csv"].includes(fileList[0].type), {
      message: "File must be a CSV.",
    }),
});

export function FileUploadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append("file", values.file[0]);

    // Make the POST request to the API endpoint
    try {
      const response = await fetch(
        "http://localhost:8080/v1/api/transactions/erp_upload",
        {
          method: "POST",
          body: formData, // Pass the FormData object as the body
        }
      );

      if (response.ok) {
        const result = await response.text();
        console.log(result); // Log or handle the response from the server
        form.reset(); // Reset the form only if the upload is successful
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="file"
          render={() => (
            <FormItem>
              <FormLabel>Transactions CSV File</FormLabel>
              <FormControl>
                <Input type="file" {...form.register("file")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </form>
    </Form>
  );
}
