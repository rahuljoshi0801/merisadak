'use client';

import { useState } from 'react';
import Link from 'next/link';

// Dummy Hardcoded Data Array
const DUMMY_COMPLAINTS = [
  {
    id: 'UK-7842',
    category: 'road',
    categoryName: 'Damaged Road',
    icon: '🛣️',
    status: 'pending',
    description: 'Large pothole near Mall Road causing accidents. Needs immediate fixing.',
    location: '29.3803, 79.4636',
    timestamp: '2026-03-25T10:30:00'
  },
  {
    id: 'UK-3921',
    category: 'garbage',
    categoryName: 'Garbage Dumping',
    icon: '🗑️',
    status: 'in-progress',
    description: 'Garbage pile accumulating near Tallital over the week.',
    location: '29.3919, 79.4542',
    timestamp: '2026-03-26T14:20:00'
  },
  {
    id: 'UK-1055',
    category: 'bathroom',
    categoryName: 'Unclean Bathroom',
    icon: '🚽',
    status: 'resolved',
    description: 'Public toilet near bus stand needs deep cleaning.',
    location: '29.3850, 79.4600',
    timestamp: '2026-03-24T09:15:00'
  }
];

export default function AdminDashboard() {
  const [filter, setFilter] = useState('all');
  const [complaints, setComplaints] = useState(DUMMY_COMPLAINTS);

  // Filter complaints based on the selected tab
  const filteredComplaints = complaints.filter(c => filter === 'all' || c.status === filter);

  // Helper function to render different colored status badges
  const getStatusBadge = (status) => {
    switch(status) {
      case 'pending':
        return <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-yellow-100 text-yellow-800 border border-yellow-200">Pending</span>;
      case 'in-progress':
        return <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-blue-100 text-blue-800 border border-blue-200">In Progress</span>;
      case 'resolved':
        return <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-green-100 text-green-800 border border-green-200">Resolved</span>;
      default:
        return null;
    }
  };

  // Change a complaint status up to resolved
  const markResolved = (id) => {
    setComplaints(complaints.map(c => 
      c.id === id ? { ...c, status: 'resolved' } : c
    ));
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col pb-8">
      {/* Admin Header */}
      <header className="bg-gray-900 text-white p-4 shadow-lg flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <Link href="/" className="mr-4 text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold tracking-wide">Admin Dashboard</h1>
        </div>
        <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded text-sm font-medium border border-gray-700 transition-colors shadow-sm">
          Export CSV
        </button>
      </header>

      <div className="p-4 max-w-5xl mx-auto w-full space-y-6 mt-2">
        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-gray-800">
            <div className="text-sm text-gray-500 font-medium mb-1">Total Issues</div>
            <div className="text-3xl font-black text-gray-800">{complaints.length}</div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-yellow-500">
            <div className="text-sm text-gray-500 font-medium mb-1">Pending</div>
            <div className="text-3xl font-black text-yellow-600">
              {complaints.filter(c => c.status === 'pending').length}
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-blue-500">
            <div className="text-sm text-gray-500 font-medium mb-1">In Progress</div>
            <div className="text-3xl font-black text-blue-600">
              {complaints.filter(c => c.status === 'in-progress').length}
            </div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-500">
            <div className="text-sm text-gray-500 font-medium mb-1">Resolved</div>
            <div className="text-3xl font-black text-green-600">
              {complaints.filter(c => c.status === 'resolved').length}
            </div>
          </div>
        </div>

        {/* Scrollable Filter Badges */}
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {['all', 'pending', 'in-progress', 'resolved'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold capitalize whitespace-nowrap transition-all ${
                filter === f 
                  ? 'bg-gray-800 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm border border-gray-200'
              }`}
            >
              {f.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Mapped Complaints List */}
        <div className="space-y-4">
          {filteredComplaints.length === 0 ? (
            <div className="bg-white p-10 rounded-lg shadow-sm text-center text-gray-500 border border-gray-100">
              No mapped complaints found for this filter.
            </div>
          ) : (
            filteredComplaints.map(complaint => (
              <div key={complaint.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-start gap-4">
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-lg">
                      <span className="text-2xl" aria-hidden="true">{complaint.icon}</span>
                      <span className="font-bold text-gray-800">{complaint.categoryName}</span>
                      <span className="text-xs font-mono text-gray-500 ml-2 bg-gray-200 px-2 py-0.5 rounded">
                        {complaint.id}
                      </span>
                    </div>
                    {getStatusBadge(complaint.status)}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base border-l-2 border-gray-200 pl-3">
                    {complaint.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500 pt-2">
                    <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                      <span className="mr-1.5">📍</span> {complaint.location}
                    </div>
                    <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                      <span className="mr-1.5">🕒</span> {formatDate(complaint.timestamp)}
                    </div>
                  </div>
                </div>
                
                {/* Responsive Card Action Buttons */}
                <div className="flex flex-row md:flex-col gap-2 pt-4 md:pt-0 border-t md:border-none border-gray-100 md:w-36">
                  <button className="flex-1 md:flex-none px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-sm font-bold rounded-lg transition-colors shadow-sm">
                    View Details
                  </button>
                  {complaint.status !== 'resolved' && (
                    <button 
                      onClick={() => markResolved(complaint.id)}
                      className="flex-1 md:flex-none px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Mark Resolved
                    </button>
                  )}
                </div>
                
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
