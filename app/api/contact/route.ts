import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import { Contact } from "@/app/models/contact";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const data = await req.json();

    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    return NextResponse.json({ success: true, contact }, { status: 201 });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Server error" },
      { status: 500 }
    );
  }
}
