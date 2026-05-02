import { NextRequest, NextResponse } from 'next/server';

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export function requireAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const token = authHeader.substring(7);

  if (!ADMIN_API_KEY) {
    console.error('❌ ADMIN_API_KEY not configured in environment variables');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  if (token !== ADMIN_API_KEY) {
    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  }

  return null; // Authorized
}
