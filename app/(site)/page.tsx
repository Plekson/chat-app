import Image from "next/image";
import React from "react";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full justify-center py-12 lg:px-8 sm:px-6 bg-gray-100">
      <div className="sm:w-full sm:mx-auto sm:max-w-md">
        <Image
          className="mx-auto"
          alt="logo"
          src="/images/logo.jpg"
          width="48"
          height="48"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
