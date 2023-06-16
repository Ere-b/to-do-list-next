import clientPromise from "../../../service/service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = (await clientPromise).db("todos");
    const todos = await client.collection("todolist").find().toArray();
    return NextResponse.json({ todo: todos });
  } catch (e) {
    console.error(e);
  }
}
