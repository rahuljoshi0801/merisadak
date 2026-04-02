'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubmitComplaint() {
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    photo: null,
    location: null
  });
  
  const [loading, setLoading] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');

  // Handle HTML5 Geolocation API request
  const handleCaptureLocation = () => {
    setLocationStatus('Capturing...');
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lng = position.coords.longitude.toFixed(4);
          setFormData(prev => ({ ...prev, location: { lat, lng } }));
          setLocationStatus(`✅ Location captured: ${lat}, ${lng}`);
        },
        (error) => {
          console.error(error);
          alert('Error capturing location. Please check your device permissions.');
          setLocationStatus('');
        },
        { enableHighAccuracy: true } // Request better accuracy for mobile
      );
    } else {
      alert('Geolocation is not supported by your browser.');
      setLocationStatus('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate an API POST submission
    setTimeout(() => {
      setLoading(false);
      // Dummy success alert
      alert('Complaint submitted successfully! Your ID is: UK-' + Math.floor(1000 + Math.random() * 9000));
      // Reset form
      setFormData({ category: '', description: '', photo: null, location: null });
      setLocationStatus('');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-8">
      {/* Navigation Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center sticky top-0 z-10">
        <Link href="/" className="mr-4 text-white hover:text-blue-200 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold">Report New Issue</h1>
      </header>

      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4 mt-2">
        {/* Category Dropdown */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Issue Category *</label>
          <select 
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
          >
            <option value="">Select a category...</option>
            <option value="road">Damaged Road 🛣️</option>
            <option value="garbage">Garbage Dumping 🗑️</option>
            <option value="bathroom">Unclean Bathroom 🚽</option>
            <option value="drainage">Drainage Issue 💧</option>
            <option value="light">Street Light 💡</option>
            <option value="other">Other 📝</option>
          </select>
        </div>

        {/* Mobile-first File Input */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Photo Evidence</label>
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" // Forces back camera on mobile
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors"
            onChange={(e) => setFormData({...formData, photo: e.target.files[0]})}
          />
          {formData.photo && (
            <p className="mt-3 text-sm font-medium text-green-600 bg-green-50 p-2 rounded">
              ✅ Image selected: {formData.photo.name}
            </p>
          )}
        </div>

        {/* Text Details Area */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
          <textarea 
            required
            rows="4"
            placeholder="Describe the issue in detail..."
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-gray-50"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          ></textarea>
        </div>

        {/* Location API Access */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
          <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
          <button 
            type="button"
            onClick={handleCaptureLocation}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center shadow-sm"
          >
            <span className="mr-2 text-xl">📍</span> Capture Current Location
          </button>
          {locationStatus && (
            <p className={`mt-3 text-sm font-medium p-2 rounded ${locationStatus.includes('✅') ? 'bg-green-50 text-green-700' : 'text-gray-600'}`}>
              {locationStatus}
            </p>
          )}
        </div>

        {/* Submission Control */}
        <button 
          type="submit" 
          disabled={loading || !formData.location}
          className={`w-full font-bold py-4 px-4 rounded-lg shadow-md transition-all ${
            loading || !formData.location 
              ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
              : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white'
          }`}
        >
          {loading ? '⏳ Submitting...' : 'Submit Complaint'}
        </button>
        
        {/* Validation Helper text */}
        {!formData.location && (
          <p className="text-sm font-medium text-center text-red-500 mt-2 bg-red-50 py-2 rounded-lg">
            ⚠️ Please capture your location before submitting.
          </p>
        )}
      </form>
    </main>
  );
}
