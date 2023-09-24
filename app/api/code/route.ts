import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessage } from "openai/resources/chat/completions.mjs";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limits";
const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });
import { checkSubscription } from "@/lib/subscription";

const instructionMessage: ChatCompletionMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. use code comments for explanations.",
};

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

    const isWithinLimit = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!isWithinLimit && !isPro) {
      return new NextResponse("Free Trial exceeded", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.choices[0]);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
