import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ContactSubmission } from '@/lib/models/ContactSubmission';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, gdprConsent } = body;

    // Validation
    if (!name || !email || !phone || !service || !message || !gdprConsent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Get client information
    const userAgent = request.headers.get('user-agent') || '';
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '';

    // Save to database
    const submission = await ContactSubmission.create({
      name,
      email,
      phone,
      company,
      service,
      message,
      gdprConsent,
      userAgent,
      ip,
      source: 'website',
    });

    console.log('✅ Contact form submission saved:', submission._id);

    // TODO: Add email sending logic here (SendGrid, AWS SES, etc.)
    // TODO: Add Slack notification here

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We will get back to you shortly.',
        submissionId: submission._id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
