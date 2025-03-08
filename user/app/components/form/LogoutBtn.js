"use client";

import { logout } from "@/app/_lib/auth";
import { useRouter } from "next/navigation";

export const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await logout();

      router.refresh();
    } catch (e) {
      console.error("Logout failed:", e);
    }
  };

  return (
    <button className="p-4 bg-dark-200 text-white rounded-lg" onClick={handleLogout}>
      Log out
    </button>
  );
};
