"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import apiClient from "@/app/_utils/apiClient";

const schema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi!"),
  password: yup.string().min(8, "Minimal 8 karakter").required("Password wajib diisi!"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await apiClient.post("/auth/register", data);
      setMessage("Registrasi berhasil! Silakan login.");
    } catch (error) {
      setMessage("Registrasi gagal. Coba lagi.");
    }
  };

  return (
    <div >
      <h2 className="text-xl font-medium border-b border-border/40  mb-6 pb-6">Register Account</h2>


      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mb-6">
        <div className="flex flex-col gap-4">
          <div>
          <label className="block font-medium mb-2 text-text-400 text-sm">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full text-text-400 font-medium mb-3 p-4 rounded border border-border/40 bg-transparent focus:outline-none"
          />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>
        </div>

          <div>
          <label className="block font-medium mb-2 text-text-400 text-sm">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full text-text-400 font-medium mb-3 p-4 rounded border border-border/40 bg-transparent focus:outline-none"
          />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>
        </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-dark-300 font-bold p-4 rounded  disabled:bg-primary/60"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Register"}
        </button>
      </form>
      {message && <p className="text-center text-red-500">{message}</p>}

    </div>
  );
}
