"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "@/app/components/form/RegisterForm";
import { checkLoginStatus } from "@/app/_lib/auth";

export default function Page() {
  const router = useRouter();
  const authorize = checkLoginStatus();
  
  useEffect(() => {
    if (authorize) {
      router.replace("/profile");
    }
  }, [authorize, router]);


  return (
    <section className="py-8 lg:flex justify-center ">
      <RegisterForm />
    </section>
  );
}
