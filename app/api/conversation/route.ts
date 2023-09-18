import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!process.env.OPEN_AI_KEY) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }

    if (!messages || messages.length === 0) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    return NextResponse.json(response.choices[0]);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
