import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const jobTitle = searchParams.get('jobTitle');
    const location = searchParams.get('location');
    const experienceLevel = searchParams.get('experienceLevel');

    let query = supabaseAdmin.from('salary_data').select('*');

    if (jobTitle) {
      query = query.ilike('job_title', `%${jobTitle}%`);
    }
    if (location) {
      query = query.ilike('location', `%${location}%`);
    }
    if (experienceLevel) {
      query = query.eq('experience_level', experienceLevel);
    }

    const { data, error } = await query
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) throw error;

    // Calculate statistics
    const salaries = data
      .map(d => [(d.min_salary || 0), (d.max_salary || 0)])
      .flat()
      .filter(s => s > 0);

    const stats = {
      count: data.length,
      min: Math.min(...salaries),
      max: Math.max(...salaries),
      avg: Math.round(salaries.reduce((a, b) => a + b, 0) / salaries.length),
      median: salaries.sort((a, b) => a - b)[Math.floor(salaries.length / 2)],
    };

    return NextResponse.json({
      data,
      stats,
    });
  } catch (error) {
    console.error('Error fetching salary data:', error);
    return NextResponse.json({ error: 'Failed to fetch salary data' }, { status: 500 });
  }
}
