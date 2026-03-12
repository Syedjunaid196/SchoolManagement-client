import AcademicYearTable from "@/components/tables/AcademicYearTable";
import Link from "next/link";

export default function page(){
    return(
        <div>
    <Link
        href="/admin/academic-years/add-academic-year"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create Parent
      </Link>

       <h1 className="text-2xl font-bold mt-4 mb-6">
        Academic Years
      </h1>

      <AcademicYearTable/>
    </div>
    )
}