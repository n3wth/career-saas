'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { Search, TrendingUp, MapPin, Briefcase } from 'lucide-react';

interface SalaryResult {
  job_title: string;
  company?: string;
  location: string;
  experience_level: string;
  min_salary?: number;
  max_salary?: number;
  currency: string;
  remote_policy: string;
  verified: boolean;
}

interface SalaryStats {
  count: number;
  min: number;
  max: number;
  avg: number;
  median: number;
}

export default function SalaryPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [results, setResults] = useState<SalaryResult[]>([]);
  const [stats, setStats] = useState<SalaryStats | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const params = new URLSearchParams();
      if (jobTitle) params.append('jobTitle', jobTitle);
      if (location) params.append('location', location);
      if (experienceLevel) params.append('experienceLevel', experienceLevel);

      const res = await fetch(`/api/salary?${params}`);
      const data = await res.json();
      
      setResults(data.data);
      setStats(data.stats);
    } catch (error) {
      console.error('Error searching salaries:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatSalary = (amount: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Salary Intelligence</h1>
        <p className="text-gray-600 mt-2">Discover competitive salary data for your role</p>
      </div>

      {/* Search form */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Software Engineer"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. San Francisco"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">All Levels</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
                <option value="executive">Executive</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            <Search className="w-5 h-5 mr-2" />
            {loading ? 'Searching...' : 'Search Salaries'}
          </button>
        </form>
      </div>

      {/* Stats */}
      {stats && stats.count > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-600">Average</p>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {formatSalary(stats.avg)}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Median</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatSalary(stats.median)}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Range</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatSalary(stats.min)} - {formatSalary(stats.max)}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-sm font-medium text-gray-600 mb-2">Data Points</p>
            <p className="text-2xl font-bold text-gray-900">{stats.count}</p>
          </div>
        </div>
      )}

      {/* Results */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Salary Data
            {results.length > 0 && (
              <span className="text-gray-500 font-normal ml-2">({results.length} results)</span>
            )}
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {results.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              {loading ? 'Searching...' : 'Search for salary data to see results'}
            </div>
          ) : (
            results.map((result, idx) => (
              <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-900">{result.job_title}</h3>
                      {result.verified && (
                        <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      {result.company && <p>Company: {result.company}</p>}
                      <p>Location: {result.location} • {result.remote_policy}</p>
                      <p>Experience: {result.experience_level}</p>
                    </div>
                  </div>

                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-indigo-600">
                      {result.min_salary && result.max_salary ? (
                        <>
                          {formatSalary(result.min_salary, result.currency)} -{' '}
                          {formatSalary(result.max_salary, result.currency)}
                        </>
                      ) : result.min_salary ? (
                        formatSalary(result.min_salary, result.currency)
                      ) : result.max_salary ? (
                        formatSalary(result.max_salary, result.currency)
                      ) : (
                        'N/A'
                      )}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">per year</div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sample data notice */}
      {results.length === 0 && !loading && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> This is a demo. In production, connect to real salary data APIs like:
            Levels.fyi, Glassdoor, Payscale, or build your own crowdsourced database.
          </p>
        </div>
      )}
    </div>
  );
}
