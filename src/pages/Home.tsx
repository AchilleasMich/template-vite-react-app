import React from "react";
import { cn } from "@/utils/cn";

const Home: React.FC = () => {
  return (
    <div className={cn("flex flex-col items-center justify-center h-screen", "bg-gray-100")}>
      <h1 className={cn("text-4xl font-bold mb-4")}>Welcome to the Home Page</h1>
      <p className={cn("text-lg text-gray-700")}>
        This is a simple home page using React and Tailwind CSS.
      </p>
    </div>
  );
};

export default Home;
