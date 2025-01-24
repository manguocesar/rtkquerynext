import type { Metadata } from "next";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 p-4">
      <div>
        <h1>Redux Toolkit Testing</h1>
        <p className="text-2xl">Follow the navigation</p>
      </div>
      {children}
    </div>)
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
