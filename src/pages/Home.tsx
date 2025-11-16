import React from "react";
import { Button } from "ui-kit";
import { cn } from "@/utils/cn";
import { Card } from "@/components/Card";
import { Counter } from "@/features/counter";

const Home: React.FC = () => {
  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100", "p-8")}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={cn("text-5xl font-bold mb-4 text-gray-900")}>
            Welcome to Your React Template! 🚀
          </h1>
          <p className={cn("text-xl text-gray-700 mb-6")}>
            A modern, production-ready template with TypeScript, Vite, TailwindCSS, and more.
          </p>
          <Button variant="secondary" onClick={() => alert("Ready to go!")} className="mt-2">
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card
            title="⚡ Lightning Fast"
            description="Powered by Vite for instant HMR and optimized builds"
          />
          <Card
            title="🔷 TypeScript"
            description="Full type safety with modern TypeScript configuration"
          />
          <Card
            title="🎨 TailwindCSS v4"
            description="Utility-first CSS with the latest Tailwind features"
          />
          <Card
            title="🧪 Testing Ready"
            description="Vitest and React Testing Library configured and working"
          />
        </div>

        <div className="flex justify-center">
          <Counter />
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">
            Edit <code className="bg-gray-200 px-2 py-1 rounded">src/pages/Home.tsx</code> to
            customize this page
          </p>
          <p>
            Check out the{" "}
            <a
              href="https://github.com/AchilleasMich/template-vite-react-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              README
            </a>{" "}
            for more information
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
