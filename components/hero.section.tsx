import { cleanHtml } from "@/utilities/helper";
import React, { FC, JSX } from "react";

interface Props {
  title: string;
  description: string;
}

export const HeroSection: FC<Props> = ({ title, description }): JSX.Element => {
  const plain_description = cleanHtml(description);

  return (
    <section className="border p-2 md:p-4 lg:p-6 rounded-md">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
          {title}
        </h1>
        <p className="mt-6 leading-relaxed text-justify">
          {plain_description}
        </p>
      </div>
    </section>
  );
};
