import ParentTable from '@/components/tables/ParentTable'
import { GetParentList } from '@/service/parentService'
import Link from 'next/link'

export default async function Page() {
  const result = await GetParentList();
  if (!result.isSuccess) {
    <p>{result.problemDetails.title}</p>
  }
  const parents = result.value ?? []
  return (
    <div>
      <Link
        href="/admin/parents/add-parent"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create Parent
      </Link>

      <h1 className="text-2xl font-bold mb-6">Parents</h1>

      <ParentTable parents={parents} />
    </div>
  )
}

