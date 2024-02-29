"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "../../../../public/images/store-mate.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  getUserInfo,
  isLoggedIn,
  storeUserInfo,
} from "@/services/auth.service";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const username = (e.target as any).username.value;
    const password = (e.target as any).password.value;

    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://storemate-admin-dev.azurewebsites.net/api/Security/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      console.log(res.status);

      const data = await res.json();

      if (data?.accessToken) {
        storeUserInfo(data.accessToken);
        console.log(data);
        router.push("/dashboard");
        console.log(getUserInfo());
      }

      setLoading(false);
      console.log(isLoggedIn());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover">
      <Card className="w-[350px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle className="grid place-items-center">
              <Image src={logo} alt="Store Mate" width={120} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" name="username" placeholder="Username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col">
            <div className="w-full flex justify-start ">
              {loading ? (
                <Button disabled>
                  <Loader2 className="mr-3 h-4 w-4 animate-spin" />
                  Login...
                </Button>
              ) : (
                <Button type="submit" className="hover:bg-[#35c2f3]">
                  Login
                </Button>
              )}
            </div>
            <div className="mt-5">
              <p className="text-center text-sm">
                <Link href="/forgot-password" className="text-blue-500">
                  Forget Password?
                </Link>
              </p>
              <p className="text-center text-sm mt-1">
                Don&apos;t have an account?{" "}
                <Link href="/business-registration" className="text-blue-500">
                  Register
                </Link>
              </p>
            </div>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
