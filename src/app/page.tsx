import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex justify-center my-5">
        <Link href="/todolist">To-Do List 바로가기</Link>
      </div>
    </main>
  );
}
