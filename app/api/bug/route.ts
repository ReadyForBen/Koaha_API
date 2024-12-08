import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    bugs: [
      {
        bugId: "bug_123",
        title: "Performance Issue",
        status: "open",
        priority: "high"
      }
    ]
  });
}