import React from "react";
import UserInterface from "@/components/UserInterface";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center items-start min-h-screen">
      <div className="m-4">
        <UserInterface backendName="rust" />
      </div>
    </main>
  );
}
