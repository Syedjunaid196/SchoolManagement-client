import TeacherTable from '@/components/tables/TeacherTable'
import Link from 'next/link'
import React from 'react'

const Teachers = () => {
  return (
    <div>
       <Link
        href="/admin/teachers/add-teacher"
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create teacher
      </Link>

       <h1 className="text-2xl font-bold mb-6">Teachers</h1>
      
            <TeacherTable/>
    </div>
  )
}

export default Teachers
