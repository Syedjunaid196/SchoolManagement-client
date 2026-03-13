import ClassTable from "@/components/tables/ClassTable";
import { GetClasses } from "@/service/classService";
import Link from "next/link";

export default async function ClassesPage() {
    const result = await GetClasses();
    if (!result.isSuccess) {
        <p>{result.problemDetails.title}</p>
    }
    const classes = result.value ?? []
    return (
        <div>
            <Link href={"/admin/classes/add-class"}
                className="bg-blue-600 text-white px-4 py-2 rounded">
                Create Class
            </Link>
            <h1 className="text-2xl font-bold mt-4 mb-6">
                Classes
            </h1>

            <ClassTable classes={classes} />

        </div>
    )
}