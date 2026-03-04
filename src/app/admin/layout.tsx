"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function AdminLayout({
children,
}: {
children: React.ReactNode;
}) {
return ( <div className="flex">

  <Sidebar />

  <div className="flex flex-col flex-1">

    <Navbar />

    <main className="p-6 bg-gray-100 min-h-screen">
      {children}
    </main>

  </div>

</div>

);
}
