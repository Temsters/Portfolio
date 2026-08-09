"use client";

export default function BubbleIcon({ size = 20, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <circle cx="11" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="8.5" r="1.8" fill="currentColor" opacity="0.12" />
      <circle cx="3" cy="21" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}
