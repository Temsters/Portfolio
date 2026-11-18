"use client";

import { useEffect, useState } from "react";

const words = [
  "Teamwork",
  "Full-Stack Development",
  "Technical Solutions",
  "Innovation",
  "Data-Driven",
  "Curiosity",
];

// duplicate the list
const loopWords = [...words, ...words];

export default function RotatingWords() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index === words.length) {
      // after reaching the duplicated section,
      // silently reset to the matching position
      const timeout = setTimeout(() => {
        setIsAnimating(false);
        setIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsAnimating(true);
          });
        });
      }, 500); // match transition duration

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="h-10 overflow-hidden text-2xl italic font-semibold text-cyan-200">
      <div
        className={
          isAnimating
            ? "transition-transform duration-500 ease-in-out"
            : ""
        }
        style={{
          transform: `translateY(-${index * 2.5}rem)`,
        }}
      >
        {loopWords.map((word, i) => (
          <div
            key={`${word}-${i}`}
            className="h-10 flex items-center justify-center"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}