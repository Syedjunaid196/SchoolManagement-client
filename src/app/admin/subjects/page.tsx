import SubjectTable from "@/components/tables/SubjectTable";
import { GetSubjects } from "@/service/subjectService";
import Link from "next/link";

export default async function SubjectsPage(){
    const result = await GetSubjects();
    if(!result.isSuccess)
    {
        return <p>{result.problemDetails.title}</p>
    }

    const subjects = result.value ?? [];
    return(

        <div>
            <Link href={"/admin/subjects/create-subject"}
            className="bg-blue-600 text-white rounded px-4 py-2">Create Subject</Link>

        <h1 className="text-2xl font-bold mt-4 mb-6 text-center text-green-900">Subjects</h1>
        <SubjectTable subjects={subjects}/>
        </div>
    )
}