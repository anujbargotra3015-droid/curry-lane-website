import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Menu from "@/models/Menu";

export const dynamic = "force-dynamic";

// --- DEFAULT MENU (Only used if DB is completely empty) ---
const DEFAULT_MENU = {
  sections: [
    { id: "starters", title: "Starters", menuType: "food", items: [] },
    { id: "mains", title: "Main Course", menuType: "food", items: [] }
  ],
};

export async function GET() {
  await connectDB();
  let menu = await Menu.findOne();
  
  if (!menu) {
    menu = await Menu.create(DEFAULT_MENU);
  }

  // Sort sections slightly if needed, or return as saved order
  return NextResponse.json(menu);
}

export async function PUT(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { sections } = body;

    // Validate
    if (!Array.isArray(sections)) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Update
    let menu = await Menu.findOne();
    if (!menu) menu = await Menu.create({ sections: [] });

    // We replace the entire sections array with the new order/data from frontend
    menu.sections = sections;
    
    // Explicitly mark as modified to ensure Mongoose saves mixed types/arrays
    menu.markModified("sections");
    await menu.save();

    return NextResponse.json(menu);
  } catch (error: any) {
    console.error("Save Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}