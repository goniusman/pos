"use client";
import React, { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "../../../../public/images/store-mate.svg";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    alert("Register successful");
    window.location.href = "/login";
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover">
      <Card className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="grid place-items-center mb-2">
              <Image src={logo} alt="Store Mate" width={120} />
            </CardTitle>
            <CardDescription className="text-center">
              Provide your information to register our app.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  type="number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="image">Image</Label>
                <Input
                  className="file:bg-black file:text-white file:rounded-md file:mr-4"
                  id="image"
                  name="image"
                  placeholder="Upload Image"
                  type="file"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="roles">Roles</Label>
                <Select>
                  <SelectTrigger id="roles">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Admin</SelectItem>
                    <SelectItem value="sveltekit">Staff</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button type="submit">Register</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
