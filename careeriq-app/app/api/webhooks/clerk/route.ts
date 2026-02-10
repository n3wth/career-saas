import { NextRequest, NextResponse } from 'next/server';
import { WebhookEvent } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const event = payload as WebhookEvent;

    switch (event.type) {
      case 'user.created':
      case 'user.updated': {
        const { id, email_addresses, first_name, last_name, image_url } = event.data;

        await supabaseAdmin
          .from('users')
          .upsert({
            id,
            email: email_addresses[0].email_address,
            first_name,
            last_name,
            image_url,
            updated_at: new Date().toISOString(),
          });

        break;
      }

      case 'user.deleted': {
        const { id } = event.data;

        await supabaseAdmin
          .from('users')
          .delete()
          .eq('id', id);

        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Clerk webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
