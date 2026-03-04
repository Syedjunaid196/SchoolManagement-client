export default function AdminDashboard() {
return ( <div> <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">

    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">Students</p>
      <h2 className="text-3xl font-bold">120</h2>
    </div>

    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">Teachers</p>
      <h2 className="text-3xl font-bold">15</h2>
    </div>

    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">Parents</p>
      <h2 className="text-3xl font-bold">110</h2>
    </div>

    <div className="bg-white p-6 rounded-lg shadow">
      <p className="text-gray-500">Active Users</p>
      <h2 className="text-3xl font-bold">230</h2>
    </div>

  </div>
</div>


);
}
