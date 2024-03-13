"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import UploadButton from "@/components/UploadButton";
import { Ghost, Loader2, MessageSquare, Plus, Trash } from "lucide-react";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import axios from "axios";
const DashboardPage = () => {
  const [files, setFiles] = useState([]);
  const [fileToDelete, setFileToDelete] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    setFileToDelete(id);
    try {
      const res = await axios.delete("http://localhost:3000/api/files/delete", {
        //@ts-ignore
        fileId: id,
      });
      getUserFiles();
      setIsLoading(false);
      setFileToDelete("");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };
  const getUserFiles = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/user/getUserFiles");
      const result = await res.json();
      if (result?.error) {
        router.push("/sign-in");
      }
      setFiles(result.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // getUserFiles();
  }, []);
  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-r-gray-200 pb-5 sm:flex-row sm:items-center">
        <h1 className="mb-3 font-bold text-5xl text-gray-500">My Files</h1>
        <UploadButton />
      </div>
      {/* display all user files */}
      {isLoading && (
        <Skeleton height={50} className="my-2" count={3}></Skeleton>
      )}
      {files?.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
          {files
            .sort(
              (a, b) =>
                //@ts-ignore
                new Date(b.createdAt).getTime() -
                //@ts-ignore
                new Date(a.createdAt).getTime()
            )
            .map((file: any) => (
              <li
                key={file?.id}
                className="relative cols-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow transition hover:shadow-lg"
              >
                {fileToDelete === file.id && (
                  <div className="w-full h-full bg-black opacity-40 justify-center items-center flex z-50 absolute top-0 left-0">
                    <Loader2 className="h-14 w-14 animate-spin" color="blue" />
                  </div>
                )}
                <Link href={`/dashboard/${file?.id}`} className="">
                  <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                    <div className="flex-1 truncate">
                      <div className="flex items-center space-x-3">
                        <h3 className="truncate text-lg font-medium text-zinc-900">
                          {file?.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Plus className="h-4 w-4 " />
                    {format(new Date(file?.createdAt), "MMM yyyy")}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Mocked
                  </div>
                  <Button
                    size="sm"
                    className="w-full"
                    variant="destructive"
                    onClick={() => handleDelete(file?.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        !isLoading && (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="h-8 text-zinc-800 w-8" />
            <h3 className="font-semibold text-xl">Pretty empty around here</h3>
            <p>Let&apos;s upload your first PDF</p>
          </div>
        )
      )}
    </main>
  );
};

export default DashboardPage;
