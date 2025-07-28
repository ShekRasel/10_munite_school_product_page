"use client";

import { cleanHtml } from "@/utilities/helper";
import React, { FC, JSX } from "react";
import TypewriterComponent from "typewriter-effect";

interface Props {
  title: string;
  description: string;
}

export const HeroSection: FC<Props> = ({ title, description }): JSX.Element => {
  const plain_description = cleanHtml(description);

  return (
    <section className="border border-gray-600 md:p-4 lg:p-6 rounded-md">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Static title for SEO & accessibility */}
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight leading-snug text-green-400 mb-2">
          {title ?? "IELTS Course by Munzereen Shahid"}
        </h1>

        {/* Dynamic typewriter text below the title */}
        <div className="text-xl md:text-2xl text-white h-[40px] mb-4">
          <TypewriterComponent
            options={{
              strings: [
                "Get Band 7+ in IELTS",
                "Learn from Munzereen Shahid",
                "Enroll Now & Start Winning!",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 50,
            }}
          />
        </div>

        {/* Cleaned description */}
        <p className="mt-4 leading-relaxed text-gray-300">
          {plain_description}
        </p>
      </div>
    </section>
  );
};
