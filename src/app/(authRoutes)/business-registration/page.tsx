"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import logo from "../../../../public/images/store-mate.svg";

const formSchema = z.object({
  name: z.string(),
  email: z.string().min(2, {
    message: "Type a valid email",
  }),
  userName: z.string().min(5, {
    message: "User Name must be at least 5 characters.",
  }),
  firstName: z.string(),
  surname: z.string(),
  userEmail: z.string(),
  password: z.string(),
  woo: z.enum(["yes", "no"]),
  key: z.string(),
  secret: z.string(),
  apiUrl: z.string(),
});

export default function BusinessRegistrationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      userName: "",
      firstName: "",
      surname: "",
      userEmail: "",
      password: "",
      woo: "no",
      key: "",
      secret: "",
      apiUrl: "",
    },
  });

  const wooRegister = form.watch("woo");

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.

    try {
      const res = await fetch(
        "https://storemate-admin-dev.azurewebsites.net/api/Tenant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            confirmPassword: values.password,
            roles: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
            permissions: ["3fa85f64-5717-4562-b3fc-2c963f66afa6"],
          }),
        }
      );
      console.log(res.status);

      const data = await res.json();
    } catch (error) {
      console.error(error);
    }

    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover">
      <Form {...form}>
        <Card className="w-[350px]">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="grid place-items-center mb-2">
                <Image src={logo} alt="Store Mate" width={120} />
              </CardTitle>
              <CardDescription className="text-center">
                Provide your business information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Business Name</FormLabel> */}
                        <FormControl>
                          <Input placeholder="Business Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Email</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder="Business Email"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="userName"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Email</FormLabel> */}
                        <FormControl>
                          <Input placeholder="User Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="userEmail"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Email</FormLabel> */}
                        <FormControl>
                          <Input placeholder="User Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>First Name</FormLabel> */}
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Surname</FormLabel> */}
                        <FormControl>
                          <Input placeholder="Surname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Surname</FormLabel> */}
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="image">Upload Logo</Label>
                  <Input
                    className=" file:bg-black file:text-white file:rounded-md file:mr-4"
                    id="image"
                    name="image"
                    placeholder="Upload Image"
                    type="file"
                  />
                </div> */}
                <div className="flex flex-col space-y-1">
                  <FormField
                    control={form.control}
                    name="woo"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>
                          Do you want to sign up for wooCommerce?
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="yes" />
                              </FormControl>
                              <FormLabel className="font-normal">Yes</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="no" />
                              </FormControl>
                              <FormLabel className="font-normal">No</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {wooRegister === "yes" ? (
                  <>
                    <div className="flex flex-col space-y-1">
                      <FormField
                        control={form.control}
                        name="key"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Surname</FormLabel> */}
                            <FormControl>
                              <Input placeholder="Key" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <FormField
                        control={form.control}
                        name="secret"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Surname</FormLabel> */}
                            <FormControl>
                              <Input placeholder="Secret" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <FormField
                        control={form.control}
                        name="apiUrl"
                        render={({ field }) => (
                          <FormItem>
                            {/* <FormLabel>Surname</FormLabel> */}
                            <FormControl>
                              <Input placeholder="Api Url" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              {/* <Button variant="outline">Cancel</Button> */}
              <Button type="submit">Register</Button>
            </CardFooter>
          </form>
        </Card>
      </Form>
    </main>
  );
}
