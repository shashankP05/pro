"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      aria-label="Close"
      className="absolute top-6 left-6 text-3xl text-gray-500 hover:text-gray-800 focus:outline-none"
    >
      &times;
    </button>
  );
}