import { SectionItem } from "@/types";
import React, { FC } from "react";
import { GoArrowRight } from "react-icons/go";

interface PointerItem {
  id: string;
  text: string;
  icon?: string;
  color?: string;
}

interface Props {
  learningPoint: SectionItem<PointerItem>;
}

export const LearningPoint: FC<Props> = ({ learningPoint }) => {
  const pointerItem = learningPoint.values;

  if (!pointerItem || pointerItem.length === 0) return null;

  return (
    <section className="">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-start">
          {learningPoint.name}
        </h2>

        <ul className="">
          {pointerItem.map((item, index) => (
            <li key={item.id} className="flex gap-4">
              <div className="mt-1 text-xl text-primary">
                <GoArrowRight />
              </div>
              <p className="text-justify">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
