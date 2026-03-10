import ParentTable from '@/components/tables/ParentTable'
import Link from 'next/link'

const Parents = () => {
  return (
    <div>
    <Link
        href="/admin/parents/add-parent"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create Parent
      </Link>

       <h1 className="text-2xl font-bold mb-6">Teachers</h1>
      
            <ParentTable/>
    </div>
  )
}

export default Parents
