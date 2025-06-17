import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, source, service } = body;

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email notification
    // 3. Store the submission in a database
    // For now, we'll just simulate a successful response

    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
} 