import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className, ...props }) => {
  return (
    <div
      className={`rounded-lg shadow-md bg-white overflow-hidden dark:bg-gray-800 ${className}`}
      {...props}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">{children}</p>
      </div>
    </div>
  );
};

export default Card;
