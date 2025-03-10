"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkLoginStatus } from "@/app/_lib/auth";
import LoginForm from "@/app/components/form/LoginForm";

export default function Page() {
  const router = useRouter();
  const authorize = checkLoginStatus();

  if (authorize) {
    router.replace("/profile");
  }

  return (
    <section className="py-8 lg:flex justify-center ">
      <LoginForm />
    </section>
  );
}
