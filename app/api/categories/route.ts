import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    console.log("🔍 API Route - Creating Supabase client...");

    const supabase = await createClient();
    console.log("✅ Supabase client created");

    console.log("📡 Making Supabase query...");
    const { data, error } = await supabase.from("categories").select("*");

    console.log("📊 API Query result:");
    console.log("  - Data:", data);
    console.log("  - Error:", error);
    console.log("  - Data length:", data?.length || 0);

    if (error) {
      console.error("❌ Supabase error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ Query successful, returning data");
    return NextResponse.json({ data: data || [] });
  } catch (err) {
    console.error("💥 API Exception:", err);
    console.error("  - Error type:", typeof err);
    console.error(
      "  - Error message:",
      err instanceof Error ? err.message : String(err)
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
