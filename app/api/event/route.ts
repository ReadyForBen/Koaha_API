import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    events: [
      {
        eventId: "evt_123",
        name: "Winter Festival",
        date: "2024-12-25",
        status: "upcoming"
      }
    ]
  });
}