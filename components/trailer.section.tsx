"use client";

import { ChecklistItem, CtaText, MediaItem } from "@/types";
import React, { FC, JSX, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { PrimaryButton } from "./button/primary.buttton";
import { useScrollPosition } from "@/hooks/use-scroll.position";

interface Props {
  media?: MediaItem[];
  checklist?: ChecklistItem[];
  cta_text?: CtaText;
}

export const TrailerSection: FC<Props> = ({
  media = [],
  checklist,
  cta_text,
}): JSX.Element => {
  const scrollValue = useScrollPosition();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const currentMedia = media[currentIndex];

  const handleNext = () => {
    setPlayingVideoId(null); // Reset video
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setPlayingVideoId(null);
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleThumbnailClick = (index: number) => {
    setPlayingVideoId(null);
    setCurrentIndex(index);
  };

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideoId(videoId);
  };

  if (media.length === 0 && (!checklist || checklist.length === 0)) {
    return (
      <div className="flex items-center justify-center h-full rounded-lg p-4">
        No trailer or checklist available
      </div>
    );
  }

  return (
    <section className="rounded-lg sticky overflow-auto">
      {/* Slider Section */}
      <div className="relative aspect-video w-full mb-4 rounded overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white cursor-pointer"
        >
          <BiLeftArrow size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white cursor-pointer"
        >
          <BiRightArrow size={24} />
        </button>

        {/* Media Display */}
        {currentMedia.resource_type === "image" && (
          <img
            src={currentMedia.resource_value}
            alt="media"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}

        {currentMedia.resource_type === "video" &&
          (playingVideoId === currentMedia.resource_value ? (
            <iframe
              src={`https://www.youtube.com/embed/${currentMedia.resource_value}?autoplay=1`}
              title="video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded"
            />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => handlePlayVideo(currentMedia.resource_value)}
            >
              <img
                src={
                  currentMedia.thumbnail_url ||
                  "https://via.placeholder.com/640x360?text=No+Thumbnail"
                }
                alt="video thumbnail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mb-6 overflow-x-auto hide-scrollbar">
        {media.map((m, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-20 h-14 border-2 rounded overflow-hidden cursor-pointer flex-shrink-0 ${
              index === currentIndex ? "border-green-500" : "border-transparent"
            }`}
          >
            <img
              src={
                m.resource_type === "image"
                  ? m.resource_value
                  : m.thumbnail_url ||
                    "https://via.placeholder.com/160x90?text=No+Thumbnail"
              }
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* enroll system */}

      {/* desktop */}
      <div>
        <h1 className="py-2 text-xl font-semibold text-green-500">৳ 1000</h1>
        <PrimaryButton className="font-semibold w-full">
          {cta_text?.name}
        </PrimaryButton>
      </div>

      {/* mobile */}
      {scrollValue > 400 && (
        <div className="fixed bottom-0 left-0 w-full z-50 shadow md:hidden bg-gray-800 px-4 py-4">
          <h1 className="text-xl font-semibold text-green-500">৳ 1000</h1>
          <PrimaryButton className="w-full font-semibold mt-2">
            {cta_text?.name}
          </PrimaryButton>
        </div>
      )}

      {/* Checklist Section */}
      {checklist && checklist.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Course Highlights</h3>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-4 h-4 object-contain filter invert"
                  loading="lazy"
                />
                <span className="text-sm">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
