import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    users: [
      {
        userId: "5361189550",
        badgeType: "winter"
      }
    ]
  });
}
