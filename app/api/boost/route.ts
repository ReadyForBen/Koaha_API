import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    boosts: [
      {
        boostId: "bst_123",
        type: "performance",
        multiplier: 2,
        duration: "24h"
      }
    ]
  });
}