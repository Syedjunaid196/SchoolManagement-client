import SectionsTable from "@/components/tables/SectionTable";
import { GetSections } from "@/service/sectionService";
import Link from "next/link";

export default async function SectionPage() {

    const result = await GetSections();
    if(!result.isSuccess){
        <p>{result.problemDetails.title}</p>
    }
    return (
        <div>
            <Link
                href="/admin/sections/add-section"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Create Section
            </Link>

             <h1 className="text-2xl font-bold mt-4 mb-6">
        Sections
      </h1>

      <SectionsTable sections={result.value ??[]}/>
        </div>
    )
}