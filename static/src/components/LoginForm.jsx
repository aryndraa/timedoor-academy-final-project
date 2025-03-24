import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const schema = yup.object().shape({
  email: yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {setIsAuth, users, setUser} = useAuth()

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); // Tambahkan state
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (data) => {
    setIsSubmitting(true); 
    setErrorMessage("");

    const foundUser = users.find(user => user.email === data.email && user.password === data.password);

    if (foundUser) {
      setUser(foundUser);
      setIsAuth(true);
      navigate("/"); // Redirect ke halaman utama setelah login sukses
    } else {
      setErrorMessage("Email atau password salah");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="max-w-md mx-auto p-4 bg-dark-200 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <div className="mb-3">
        <label className="block text-sm mb-2">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full placeholder:text-text-400/80 text-text-300 bg-dark-100 p-2 focus:outline-none rounded"
          placeholder="Masukkan email"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm mb-2">Password</label>
        <input
          type="password"
          {...register("password")}
          className="w-full placeholder:text-text-400/80 text-text-300 bg-dark-100 p-2 focus:outline-none rounded"
          placeholder="Masukkan password"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting} // Disable tombol saat loading
        className={`w-full bg-primary text-dark-300 font-semibold p-2 rounded transition ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? "Memproses..." : "Masuk"}
      </button>
      {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;
