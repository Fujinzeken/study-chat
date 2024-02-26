"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const AuthCallback = () => {
  const router = useRouter();

  const searchParam = useSearchParams();
  const origin = searchParam.get("origin");

  const fetchUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user");

      if (res) {
        router.push("/dashboard");
      }
    } catch (err) {
      console.log(err);
      router.push("/sign-in");
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
