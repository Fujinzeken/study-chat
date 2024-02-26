import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Study<span className="text-blue-600">₡hat.</span>
          </Link>

          {/* Todo: add to mobile navbar  */}

          <div className="hidden items-center space-x-4 sm:flex">
            <Link href="/pricing">
              <Button size="sm" variant="ghost">
                Pricing
              </Button>
            </Link>
            <LoginLink>
              {" "}
              <Button size="sm" variant="ghost">
                Sign in
              </Button>
            </LoginLink>
            <RegisterLink>
              {" "}
              <Button size="sm">
                Get Started <ArrowRight className="ml-1.5" />
              </Button>
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
