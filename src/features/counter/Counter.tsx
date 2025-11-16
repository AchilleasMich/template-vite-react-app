import React from "react";
import { cn } from "@/utils/cn";
import { useLocalStorage } from "@/hooks/useLocalStorage";

/**
 * Counter feature component - demonstrates state management and local storage
 */
export const Counter: React.FC = () => {
  const [count, setCount] = useLocalStorage<number>("counter", 0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 border rounded-lg bg-white shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">Counter Example</h2>
      <div className="text-6xl font-bold text-blue-600">{count}</div>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className={cn(
            "px-4 py-2 rounded-md font-medium",
            "bg-red-500 text-white hover:bg-red-600",
            "transition-colors duration-200",
          )}
        >
          -
        </button>
        <button
          onClick={reset}
          className={cn(
            "px-4 py-2 rounded-md font-medium",
            "bg-gray-500 text-white hover:bg-gray-600",
            "transition-colors duration-200",
          )}
        >
          Reset
        </button>
        <button
          onClick={increment}
          className={cn(
            "px-4 py-2 rounded-md font-medium",
            "bg-green-500 text-white hover:bg-green-600",
            "transition-colors duration-200",
          )}
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-600">Value persists in localStorage</p>
    </div>
  );
};
