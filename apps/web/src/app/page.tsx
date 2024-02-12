"use client";
import { useState } from "react";

const Page = () => {
  const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? "empty";
  console.log({ DOCS_URL });
  const [s, setS] = useState("");

  return (
    <div>
      <p>This is our website ddd</p>
      <div>
        <a href="/docs">Docs</a>
      </div>
    </div>
  );
};

export default Page;
