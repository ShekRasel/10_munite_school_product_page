import { ChecklistItem, MediaItem } from "@/types";
import React, { FC, JSX } from "react";


interface Props {
  media?: MediaItem[];
  checklist?: ChecklistItem[];
}

export const TrailerSection : FC<Props> = ({ media, checklist }): JSX.Element => {
  if ((!media || media.length === 0) && (!checklist || checklist.length === 0)) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-lg p-4">
        No trailer or checklist available
      </div>
    );
  }

  // First video media
  const video = media?.find((m) => m.resource_type === "video");
  // First image media fallback
  const image = media?.find((m) => m.resource_type === "image");

  return (
    <section className="p-4 bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md sticky top-4 max-h-screen overflow-auto">
      {/* Media Section */}
      {video ? (
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mb-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.resource_value}`}
            title="Course Trailer"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      ) : image ? (
        <img
          src={image.resource_value}
          alt="Course preview"
          className="rounded-lg object-cover w-full h-auto mb-6 shadow-md"
        />
      ) : null}

      {/* Checklist Section */}
      {checklist && checklist.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Course Highlights
          </h3>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 text-gray-800 dark:text-gray-200"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-6 h-6 object-contain "
                  loading="lazy"
                />
                <span className="text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
