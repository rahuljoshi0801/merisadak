'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TrackComplaint() {
  const [complaintId, setComplaintId] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (complaintId.trim()) {
      setSearched(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center">
        <Link href="/" className="mr-4 text-white hover:text-blue-200 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold">Track Complaint</h1>
      </header>

      <div className="p-4 max-w-md mx-auto w-full mt-4 flex-1">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Complaint ID</label>
              <input 
                type="text" 
                placeholder="Enter your complaint ID (e.g. UK-1055)"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors shadow-sm"
            >
              Search Status
            </button>
          </form>

          {/* Simple Dummy Output component */}
          {searched && (
            <div className="mt-8 pt-6 border-t border-gray-100 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Feature Coming Soon</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Live tracking integration for ticket <span className="font-semibold px-2 py-1 bg-gray-100 rounded text-gray-800">{complaintId.toUpperCase()}</span> will be available in the next app update.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
