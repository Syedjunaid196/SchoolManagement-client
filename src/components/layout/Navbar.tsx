"use client";

import { logoutService } from "@/service/userService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await logoutService()
    if (result.isSuccess) {
      router.replace("/");
      toast.success(result.value)
    }
    else {
      toast.error(result.value)
    }
  }
  return (<header className="bg-white shadow p-4 flex justify-between items-center"> <h1 className="font-semibold">Admin Panel</h1>

    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">Admin</span>
      <button
        onClick={handleLogout}
        className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>


  </header>

  );
}
