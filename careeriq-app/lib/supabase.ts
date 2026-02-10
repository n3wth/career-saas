import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Database types
export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  image_url?: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  subscription_status: 'active' | 'inactive' | 'trialing' | 'past_due' | 'canceled';
  trial_ends_at?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Job {
  id: string;
  user_id: string;
  company: string;
  position: string;
  location?: string;
  salary_range?: string;
  job_url?: string;
  status: 'applied' | 'interview' | 'offer' | 'rejected' | 'accepted' | 'declined';
  applied_date?: Date;
  interview_date?: Date;
  notes?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Conversation {
  id: string;
  user_id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

export interface Message {
  id: string;
  conversation_id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  created_at: Date;
}

export interface SalaryData {
  id: string;
  job_title: string;
  company?: string;
  location: string;
  experience_level: 'entry' | 'mid' | 'senior' | 'lead' | 'executive';
  min_salary?: number;
  max_salary?: number;
  currency: string;
  employment_type: string;
  remote_policy: 'onsite' | 'hybrid' | 'remote';
  verified: boolean;
  source?: string;
  created_at: Date;
}
