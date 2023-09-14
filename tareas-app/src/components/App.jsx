import React from "react";
import Tasklist from "./Tasklist";
import { Taskform } from "./Taskform";

export default function App() {
  return (
    <main className="bg-zinc-900 h-screen p-10">
      <div className="container mx-auto">
        <Taskform />
        <Tasklist />
      </div>
    </main>
  );
}
