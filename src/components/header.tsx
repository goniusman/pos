"use client";

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import logo from "../../public/images/store-mate.svg";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  const user = getUserInfo();

  const handleLogout = () => {
    removeUserInfo();
    window.location.href = "/login";
  };

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[60px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <Image src={logo} alt="Store Mate" width={80} height={80} />
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="h-10 w-10 rounded-full bg-zinc-300 flex items-center justify-center text-center">
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="hover:cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="avatar"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-52">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      {user?.userName}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.role}
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-1 items-center">
                      <Button onClick={handleLogout}>Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
