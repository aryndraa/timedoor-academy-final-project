import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import auth from "./../../api/auth.js";
import {useNavigate} from "react-router-dom";

const schema = yup.object().shape({
  first_name: yup.string().required("Nama depan wajib diisi"),
  last_name: yup.string(),
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();


  const submit = async (data) => {
    try {
      const userData = await auth.registerUser({ request: data });

      if (userData?.data?.access_token) {
        alert("Registrasi berhasil!");
        navigate("/");
      } else {
        alert("Registrasi gagal, coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat registrasi.");
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="max-w-md mx-auto p-4 bg-dark-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>

      <div className="mb-3">
        <label className="block text-sm mb-2">Nama Depan</label>
        <input
          {...register("first_name")}
          className="w-full placeholder:text-text-400/80 text-text-300  p-2 bg-dark-100 focus:outline-none   rounded"
          placeholder="Masukkan nama depan  "
        />
      <p className="text-red-500 text-sm">{errors.first_name?.message}</p>
      </div>

      <div className="mb-3">
        <label className="block text-sm mb-2">Nama Belakang</label>
        <input
          {...register("last_name")}
          className="w-full placeholder:text-text-400/80 text-text-300  p-2 bg-dark-100 focus:outline-none   rounded"
          placeholder="Masukkan nama belakang "
        />
       <p className="text-red-500 text-sm">{errors.last_name?.message}</p>
      </div>

      <div className="mb-3">
        <label className="block text-sm mb-2">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full placeholder:text-text-400/80 text-text-300  bg-dark-100  p-2 focus:outline-none rounded"
          placeholder="Masukkan email"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-2">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full placeholder:text-text-400/80 text-text-300  bg-dark-100  p-2 focus:outline-none rounded"
          placeholder="Masukkan password"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-dark-300 font-semibold p-2 rounded  transition"
      >
        {isSubmitting ? "Mendaftarkan..." : "Daftar"}
      </button>
    </form>
  );
};

export default RegisterForm;
