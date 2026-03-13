import Link from "next/link";

export default function ClassesPage() {
    return (
        <div>
            <Link href={"/admin/classes/add-class"}
                className="bg-blue-600 text-white px-4 py-2 rounded">
                Create Class
            </Link>
        </div>
    )
}