import TeacherTable from '@/components/tables/TeacherTable'
import { GetTeacherList } from '@/service/teacherService'
import Link from 'next/link'
export default async function Page() {
  const result = await GetTeacherList();
  if (!result.isSuccess) {
    <p>{result.problemDetails.title}</p>
  }
  const teachers = result.value ?? [];
  return (
    <div>
      <Link
        href="/admin/teachers/add-teacher"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create teacher
      </Link>

      <h1 className="text-2xl font-bold mb-6">Teachers</h1>

      <TeacherTable teachers={teachers} />
    </div>
  )
}

