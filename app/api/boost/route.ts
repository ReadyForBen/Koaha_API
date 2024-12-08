import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    users: [
      {
        userId: "123456789",
        badgeType: "boost"
      }
    ]
  });
}
