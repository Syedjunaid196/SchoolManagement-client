"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">

            <h2 className="text-xl font-bold mb-8">School ERP</h2>

            <nav className="flex flex-col gap-4 text-sm">

                <Link
                    href="/admin/dashboard"
                    className="hover:bg-slate-800 p-2 rounded"
                >
                    Dashboard
                </Link>

                <Link
                    href="/admin/students"
                    className="hover:bg-slate-800 p-2 rounded"
                >
                    Students
                </Link>

                <Link
                    href="/admin/teachers"
                    className="hover:bg-slate-800 p-2 rounded"
                >
                    Teachers
                </Link>

                <Link
                    href="/admin/parents"
                    className="hover:bg-slate-800 p-2 rounded"
                >
                    Parents
                </Link>

                <Link
                    href="/admin/academic-years"
                    className="hover:bg-slate-800 p-2 rounded"
                >
                    Academic Years
                </Link>

                <Link
                    href="/admin/classes"
                    className="hover:bg-slate-800 p-2 rounded"
                >
                    Classes
                </Link>

            </nav>

        </aside>

    );
}
