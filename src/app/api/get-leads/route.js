import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Professional from "@/models/Professional";
import ServiceRequest from "@/models/ServiceRequest";

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email required", leads: [] },
        { status: 400 }
      );
    }

    const professional = await Professional.findOne({ email });

    if (!professional) {
      return NextResponse.json(
        { message: "Professional not found", leads: [] },
        { status: 404 }
      );
    }

    let services = professional.serviceName || [];

    // 🔥 FIX 1: string handling
    if (typeof services === "string") {
      try {
        services = JSON.parse(services);
      } catch {
        services = [services];
      }
    }

    // 🔥 FIX 2: ensure array
    if (!Array.isArray(services)) {
      services = [services];
    }

    // 🔥 FIX 3: normalize (VERY IMPORTANT)
    services = services
      .filter(Boolean)
      .map((s) => s.toLowerCase().trim());

    if (services.length === 0) {
      return NextResponse.json({ leads: [] });
    }

    // 🔥 FIX 4: fetch all leads first then match safely
    const leads = await ServiceRequest.find({})
      .sort({ createdAt: -1 });

    const filteredLeads = leads.filter((lead) => {
      if (!lead?.serviceName) return false;

      return services.includes(
        lead.serviceName.toLowerCase().trim()
      );
    });

    return NextResponse.json({
      leads: filteredLeads,
      count: filteredLeads.length,
    });

  } catch (error) {
    console.error("LEADS FETCH ERROR:", error);
    return NextResponse.json(
      { message: "Server error", leads: [] },
      { status: 500 }
    );
  }
}