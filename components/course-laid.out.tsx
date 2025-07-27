import { SectionItem } from "@/types";
import React, { FC } from "react";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

interface LaidOutProps {
  laidout: SectionItem<Feature>;
}

export const CourseLaidOut: FC<LaidOutProps> = ({ laidout }) => {
  const features = laidout.values;

  if (!features || features.length === 0) return null;

  return (
    <section className="">
      <div className="space-y-4 md:space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {laidout.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gray-800 rounded-md p-2 py-4 lg:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3"
            >
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 relative">
                  <Image src={feature.icon} alt={feature.title} fill />
                </div>
              </div>

              <h3 className="text-lg font-semibold ">{feature.title}</h3>

              <p className="text-sm leading-relaxed">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
