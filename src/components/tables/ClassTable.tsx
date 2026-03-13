import { ClassListResponse } from "@/models/class/ClassListResponse";

interface Props {
    classes: ClassListResponse[]
}

export default function ClassTable({ classes }: Props) {
    return (
        <table className="w-full border">

            <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 text-left">Class Name</th>
                </tr>
            </thead>

            <tbody>
                {classes.map((c) => (
                    <tr key={c.id} className="border-t">
                        <td className="p-2">{c.name}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}