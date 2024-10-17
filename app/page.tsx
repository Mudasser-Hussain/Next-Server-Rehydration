import { Suspense } from "react";
import TodoPage from "./Todo";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<div className="text-5xl">Loading...</div>}>
        <TodoPage />
      </Suspense>
    </div>
  );
}
