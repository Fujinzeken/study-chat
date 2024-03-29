import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
          <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold text-gray-700">
              {" "}
              StudyChat is now public
            </p>
          </div>
          <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
            Chat with your <span className="text-blue-600">documents</span> in
            seconds.
          </h1>
          <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
            StudyChat allows you to have conversation with your any pdf
            document. Simply upload your file and start asking questions right
            away.
          </p>

          <Link href="/dashboard" target="_blank">
            <Button size="lg" className="mt-5">
              Get Started <ArrowRight className="ml-2 h-5 w-5"></ArrowRight>
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>
      {/* value proposition section  */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-event-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="relative left-[calc(50% - 11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% -30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
                  <Image
                    src="/image/dashboard-preview-image.png"
                    width={487}
                    height={377}
                    alt="product-preview"
                    quality={100}
                    className="rounded-md  bg-white p-2 sm:p-8 md:p-8 shadow-2xl ring-1 ring-gray-900/10 mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature section  */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 ">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Chatting to your pdf files has never been easier than with
              StudyChat
            </p>
          </div>
        </div>

        {/* steps  */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2  py-2 pl-4 md:border-l-0 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account.
              </span>
              <span className="mt-2 text-zinc-700">
                Either starting out with a free plan or choose a{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 underline underline-offset-2"
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2  py-2 pl-4 md:border-l-0 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your pdf file
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2  py-2 pl-4  md:pb-0 md:pl-0 md:pt-4 ">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start asking questions.
              </span>
              <span className="mt-2 text-zinc-700">
                it&apos;s that simple, try out StudyChat today.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10">
              <Image
                src="/image/dashboard-preview-image.png"
                width={487}
                height={377}
                alt="product-preview"
                quality={100}
                className="rounded-md  bg-white p-2 sm:p-8 md:p-8 shadow-2xl ring-1 ring-gray-900/10 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
