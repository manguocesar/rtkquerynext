'use server';

import { Countries } from "@/components/countries/Countries";
import type { Metadata } from "next";

export default async function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 p-4">
      <div>
        <h1>Redux Toolkit Testing</h1>
        <p className="text-2xl">Follow the navigation</p>
        <Countries />
      </div>
      {children}
    </div>)
}

