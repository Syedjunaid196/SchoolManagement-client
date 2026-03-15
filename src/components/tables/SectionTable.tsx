import { SectionListResponse } from "@/models/sections/sectionListResponse";

interface Props {
    sections: SectionListResponse[]
}

export default function SectionsTable({sections}: Props){
return(
    <table className="w-full border">
        <thead className="bg-gray-100">
            <tr>
                <th className="p-2 text-left">Class</th>
                <th className="p-2 text-left">Section</th>
            </tr>
        </thead>

        <tbody>
            {sections.map((s)=>(
                <tr key={s.id} className="border t">
                    <td className="p-2">{s.schoolClassName}</td>
                    <td className="p-2">{s.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
}