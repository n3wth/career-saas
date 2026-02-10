'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { CreditCard, User, Bell } from 'lucide-react';

interface UserData {
  subscription_status: string;
  trial_ends_at?: string;
  stripe_customer_id?: string;
}

export default function SettingsPage() {
  const { user } = useUser();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user?.primaryEmailAddress?.emailAddress }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleManageBilling = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/portal', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Error opening portal:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account and subscription</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Profile
            </h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              {user?.imageUrl && (
                <img
                  src={user.imageUrl}
                  alt={user.fullName || 'Profile'}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <p className="font-semibold text-gray-900">{user?.fullName || 'User'}</p>
                <p className="text-sm text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Subscription
            </h2>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Current Plan</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-900">CareerIQ Pro</p>
                  <p className="text-gray-600">$99/month</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Active (Demo)
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Plan Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Unlimited job tracking
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  AI career coach with unlimited conversations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Full salary database access
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Advanced analytics and insights
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Priority support
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              {userData?.stripe_customer_id ? (
                <button
                  onClick={handleManageBilling}
                  disabled={loading}
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Manage Billing'}
                </button>
              ) : (
                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'Start 7-Day Free Trial'}
                </button>
              )}
              
              <p className="text-xs text-gray-500 text-center">
                Demo mode: Stripe integration ready. Add your API keys to enable payments.
              </p>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Application reminders</p>
                <p className="text-sm text-gray-600">Get notified about application deadlines</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Interview prep tips</p>
                <p className="text-sm text-gray-600">Receive tips before scheduled interviews</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </label>

            <label className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Weekly digest</p>
                <p className="text-sm text-gray-600">Summary of your job search activity</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
