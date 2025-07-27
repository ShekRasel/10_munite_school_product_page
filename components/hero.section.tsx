'use client'
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
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight leading-snug text-green-400">
          <TypewriterComponent
            options={{
              strings: [title ?? "IELTS Course by Munzereen Shahid"],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
              delay: 50,
            }}
          />
        </h1>
        <p className="mt-4 leading-relaxed text-center">{plain_description}</p>
      </div>
    </section>
  );
};
