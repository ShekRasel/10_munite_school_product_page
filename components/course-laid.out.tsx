import { SectionItem } from "@/types";
import React, { FC } from "react";
import Image from "next/image";
import { PrimaryButton } from "./button/primary.buttton";

// -----------------------------
// Types
// -----------------------------

interface Feature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

type EngagementCard = {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
};

interface LaidOutProps {
  laidout: SectionItem<Feature>;
  engagement: SectionItem<EngagementCard>;
}

// -----------------------------
//  Component: CourseLaidOut
// -----------------------------

export const CourseLaidOut: FC<LaidOutProps> = ({ laidout, engagement }) => {
  const features = laidout.values;

  if (!features || features.length === 0) return null;

  return (
    <section className="space-y-8">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        {laidout.name}
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gray-800 rounded-md p-4 lg:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 space-y-3"
          >
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 relative">
                <Image src={feature.icon} alt={feature.title} fill />
              </div>
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm leading-relaxed">{feature.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Engagement Section */}
      <Engagement engagement={engagement.values?.[0]} />
    </section>
  );
};

// -----------------------------
// Component: Engagement
// -----------------------------

interface Props {
  engagement: EngagementCard | undefined;
}

const Engagement: FC<Props> = ({ engagement }) => {
  if (!engagement) return null;

  return (
    <div
      className="rounded-md overflow-hidden mt-10 flex justify-between text-center items-center lg:text-start lg:p-2 2xl:p-8"
      style={{
        backgroundImage: `url(${engagement.background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 space-y-4 backdrop-blur">
        {/* Top icon and title */}
        <div className="flex items-center gap-3">
          <div className="">
            <Image
              src={engagement.top_left_icon_img}
              alt="icon"
              height={200}
              width={200}
              className="object-contain"
            />
          </div>
          <h3
            className="text-lg font-semibold"
            style={{ color: engagement.title_color }}
          >
            {engagement.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm" style={{ color: engagement.description_color }}>
          {engagement.description}
        </p>

        {/* CTA Button */}
        <a
          href={engagement.cta.clicked_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton className="mt-3">{engagement.cta.text}</PrimaryButton>
        </a>
      </div>

      {/* Thumbnail image */}
      <div className="hidden lg:block">
        <Image
          src={engagement.thumbnail}
          alt="Thumbnail"
          className="object-cover"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Engagement;
