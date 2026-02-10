'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Briefcase, Calendar, Target } from 'lucide-react';

interface DashboardData {
  stats: {
    total: number;
    applied: number;
    interview: number;
    offer: number;
    rejected: number;
  };
  responseRate: number;
  weeklyApplications: number;
  recentJobs: Array<{
    id: string;
    company: string;
    position: string;
    status: string;
    created_at: string;
  }>;
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center py-12 text-red-600">Failed to load dashboard</div>;
  }

  const statCards = [
    {
      title: 'Total Applications',
      value: data.stats.total,
      icon: Briefcase,
      color: 'bg-blue-500',
    },
    {
      title: 'Interviews',
      value: data.stats.interview,
      icon: Calendar,
      color: 'bg-green-500',
    },
    {
      title: 'Offers',
      value: data.stats.offer,
      icon: Target,
      color: 'bg-purple-500',
    },
    {
      title: 'Response Rate',
      value: `${data.responseRate}%`,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your job search progress</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.title} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Funnel */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Application Funnel</h2>
        <div className="space-y-3">
          {[
            { label: 'Applied', count: data.stats.applied, color: 'bg-blue-500' },
            { label: 'Interview', count: data.stats.interview, color: 'bg-green-500' },
            { label: 'Offer', count: data.stats.offer, color: 'bg-purple-500' },
            { label: 'Rejected', count: data.stats.rejected, color: 'bg-red-500' },
          ].map((stage) => {
            const percentage = data.stats.total > 0 
              ? (stage.count / data.stats.total) * 100 
              : 0;
            return (
              <div key={stage.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">{stage.label}</span>
                  <span className="text-gray-600">{stage.count} ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${stage.color} h-2 rounded-full transition-all`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {data.recentJobs.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No applications yet. Start tracking your job search!
            </div>
          ) : (
            data.recentJobs.map((job) => (
              <div key={job.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.position}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    job.status === 'applied' ? 'bg-blue-100 text-blue-700' :
                    job.status === 'interview' ? 'bg-green-100 text-green-700' :
                    job.status === 'offer' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
