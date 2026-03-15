import { SubjectListResponse } from "@/models/subjects/subjectListResponse"

interface Props {
    subjects: SubjectListResponse[]
}
export default function SubjectTable({ subjects }: Props) {
    return (
        <div>
            <table className="w-full border">

                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 text-left">Subject Name</th>
                        <th className="p-2 text-left">Code</th>
                    </tr>
                </thead>

                <tbody>
                    {subjects.map((s) => (
                        <tr key={s.id} className="border-t">
                            <td className="p-2">{s.name}</td>
                            <td className="p-2">{s.code}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}