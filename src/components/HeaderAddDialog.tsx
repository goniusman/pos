"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Category Name can't be empty.",
  }),
  code: z.string().min(5, {
    message: "Product Code must be 5 character.",
  }),
  parentCategoryId: z.string(),
  isDeleted: z.boolean(),
});

export function HeaderAddDialog({
  children,
  data,
  addCategory,
}: {
  children: React.ReactNode;
  data: any;
  addCategory: any;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      code: "",
      parentCategoryId: "",
      isDeleted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    addCategory(values);
    console.log(values);
  }

  return (
    <Form {...form}>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              The field labels marked with * are required input fields.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type category name..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-2">
                    <FormField
                      control={form.control}
                      name="code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Code *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Type category code..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                {/* <div className="col-span-2">
                  <Label htmlFor="parentCategory" className="text-right">
                    Parent Category
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="No Parent" />
                    </SelectTrigger>
                    <SelectContent>
                      {data?.map((category: any) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div> */}
                <div className="col-span-2">
                  <FormField
                    control={form.control}
                    name="parentCategoryId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Parent Category *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="No Parent" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {data?.map((category: any) => (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="image" className="">
                    Image
                  </Label>
                  <Input id="image" type="file" disabled />
                </div>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Submit</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  );
}
