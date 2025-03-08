"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {InputField} from "@/app/components/form/InputField";
import {login} from "@/app/_lib/auth";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email is required!"),
  password: yup.string().min(8, "Minimal 8 karakter").required("Password is required!"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response);
      setMessage("Login berhasil!");

    } catch (error) {
      setMessage("Login gagal. Coba lagi.");
    }
  };

  return (
    <div className="lg:min-w-[32rem] lg:bg-dark-250 p-6 rounded-lg">
      <h2 className="text-xl font-medium border-b border-border/40  mb-6 pb-6">Login Account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mb-6">
        <div className="flex flex-col gap-4">
          <InputField label="Email" type="email" name="email" register={register} error={errors.email?.message} />
          <InputField label="Password" type="password" name="password" register={register} error={errors.password?.message} />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-dark-300 font-bold p-4 rounded  disabled:bg-primary/60"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}

    </div>
  );
}

