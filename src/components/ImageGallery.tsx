"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
  alt: string;
  fit?: "cover" | "contain";
};

const pad = (value: number) => String(value).padStart(2, "0");

export default function ImageGallery({
  images,
  alt,
  fit = "contain",
}: ImageGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [side, setSide] = useState<"prev" | "next" | null>(null);

  const total = images.length;

  if (total === 0) {
    return (
      <div className="project-placeholder project-section-empty">
        PROJECT CONTENT
      </div>
    );
  }

  const goTo = (target: number) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const next = Math.min(Math.max(target, 0), total - 1);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    track.scrollTo({
      left: next * track.clientWidth,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;

    if (track && track.clientWidth > 0) {
      setIndex(Math.round(track.scrollLeft / track.clientWidth));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Mouse users step through with a click on the left or right half of
  // the image. The track stays the scroll target, so trackpad swipes work.
  const getSide = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const target =
      event.clientX - rect.left < rect.width / 2 ? "prev" : "next";

    if ((target === "prev" && isFirst) || (target === "next" && isLast)) {
      return null;
    }

    return target;
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = getSide(event);
    const hasMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (target && hasMouse) {
      goTo(target === "prev" ? index - 1 : index + 1);
    }
  };

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={alt}
    >
      <div className="carousel-frame">
        <div
          ref={trackRef}
          className="carousel-track"
          data-side={side ?? undefined}
          onScroll={handleScroll}
          onKeyDown={total > 1 ? handleKeyDown : undefined}
          onMouseMove={total > 1 ? (e) => setSide(getSide(e)) : undefined}
          onMouseLeave={total > 1 ? () => setSide(null) : undefined}
          onClick={total > 1 ? handleClick : undefined}
          tabIndex={total > 1 ? 0 : undefined}
        >
          {images.map((image, imageIndex) => (
            <div
              className="carousel-slide"
              key={image}
              role="group"
              aria-roledescription="slide"
              aria-label={`${imageIndex + 1} of ${total}`}
            >
              <Image
                src={image}
                alt={`${alt} ${imageIndex + 1}`}
                fill
                sizes="(max-width: 700px) 100vw, 90vw"
                className={`carousel-image carousel-image-${fit}`}
              />
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className="carousel-controls">
          <span className="carousel-count" aria-live="polite">
            {pad(index + 1)} / {pad(total)}
          </span>

          <div className="carousel-progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(index + 1) / total})` }} />
          </div>

          <div className="carousel-buttons">
            <button
              type="button"
              aria-label="Previous image"
              disabled={isFirst}
              onClick={() => goTo(index - 1)}
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next image"
              disabled={isLast}
              onClick={() => goTo(index + 1)}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
