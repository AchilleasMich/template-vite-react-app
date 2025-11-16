import React from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Card component - A simple card container with title and optional description
 */
export const Card: React.FC<CardProps> = ({ title, description, children, className }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
        "hover:shadow-md transition-shadow duration-200",
        className,
      )}
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
