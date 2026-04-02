import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* App Header */}
      <header className="w-full bg-blue-600 text-white p-6 shadow-md text-center rounded-b-lg">
        <h1 className="text-2xl font-bold">🏔️ Uttarakhand Civic Portal</h1>
      </header>

      <div className="w-full max-w-md p-4 space-y-6 flex-1 flex flex-col mt-4">
        {/* Welcome Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Welcome Citizen</h2>
          <p className="text-gray-600">
            Help us keep Uttarakhand clean and safe. Report civic issues and track their resolution directly from your phone.
          </p>
        </div>

        {/* Action Buttons Hub */}
        <div className="space-y-4">
          <Link href="/submit" className="block w-full">
            <div className="bg-white hover:bg-blue-50 transition-colors p-4 rounded-lg shadow-md border-l-4 border-blue-500 flex items-center">
              <span className="text-3xl mr-4" aria-hidden="true">📸</span>
              <span className="text-lg font-medium text-gray-800">Report New Issue</span>
            </div>
          </Link>

          <Link href="/track" className="block w-full">
            <div className="bg-white hover:bg-blue-50 transition-colors p-4 rounded-lg shadow-md border-l-4 border-blue-500 flex items-center">
              <span className="text-3xl mr-4" aria-hidden="true">🔍</span>
              <span className="text-lg font-medium text-gray-800">Track My Complaints</span>
            </div>
          </Link>

          <Link href="/admin" className="block w-full hidden md:block lg:block sm:block">
            {/* Keeping it accessible to mobile, but styling differently to separate citizen/admin */}
            <div className="bg-white hover:bg-gray-50 transition-colors p-4 rounded-lg shadow-md border-l-4 border-gray-800 flex items-center">
              <span className="text-3xl mr-4" aria-hidden="true">👔</span>
              <span className="text-lg font-medium text-gray-800">Admin Dashboard</span>
            </div>
          </Link>
        </div>

        {/* Dynamic Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mt-auto pt-8 pb-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600">245</div>
            <div className="text-sm text-gray-500 font-medium mt-1">Total Complaints</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <div className="text-3xl font-bold text-green-500">189</div>
            <div className="text-sm text-gray-500 font-medium mt-1">Resolved</div>
          </div>
        </div>
      </div>
    </main>
  );
}
