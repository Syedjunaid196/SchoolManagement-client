import Link from "next/link";

export default function SubjectsPage(){
    return(
        <div>
            <Link href={"/admin/subjects/create-subject"}
            className="bg-blue-600 text-white rounded px-4 py-2">Create Subject</Link>
        </div>
    )
}