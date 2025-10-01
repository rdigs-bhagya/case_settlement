import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import Claim from "@/app/models/Claim";
 
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const data = await req.json();

    // Validate required fields
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.phone ||
      !data.service
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

          const newClaim = new Claim(data);
          await newClaim.save();

    return NextResponse.json({ message: "Claim submitted successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error submitting claim" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return all saved claims
  return NextResponse.json(Claim);
}
