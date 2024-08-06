// import Image from "next/image";
"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Login from "./login/page";

export default function Home() {
  return (
    <NextUIProvider>
      <Login />
    </NextUIProvider>
  );
}
