import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get job stats
    const { data: jobs } = await supabaseAdmin
      .from('jobs')
      .select('status, applied_date')
      .eq('user_id', userId);

    const stats = {
      total: jobs?.length || 0,
      applied: jobs?.filter(j => j.status === 'applied').length || 0,
      interview: jobs?.filter(j => j.status === 'interview').length || 0,
      offer: jobs?.filter(j => j.status === 'offer').length || 0,
      rejected: jobs?.filter(j => j.status === 'rejected').length || 0,
    };

    // Get recent activity
    const { data: recentJobs } = await supabaseAdmin
      .from('jobs')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);

    // Calculate response rate
    const responseRate = stats.total > 0 
      ? Math.round(((stats.interview + stats.offer) / stats.total) * 100)
      : 0;

    // Get weekly application trend
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const { data: weeklyJobs } = await supabaseAdmin
      .from('jobs')
      .select('applied_date')
      .eq('user_id', userId)
      .gte('applied_date', weekAgo.toISOString());

    return NextResponse.json({
      stats,
      responseRate,
      weeklyApplications: weeklyJobs?.length || 0,
      recentJobs,
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return NextResponse.json({ error: 'Failed to fetch dashboard data' }, { status: 500 });
  }
}
