"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { exhibitOffset, galleryGeometry, wrapIndex } from "@/lib/carousel.mjs";
import type { Exhibit } from "@/lib/portfolio";

export function Carousel({ exhibits, label }: { exhibits: Exhibit[]; label: string }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState<string[]>([]);
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(660);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const selectorRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const swipe = useRef<{ x: number; y: number } | null>(null);
  const lastSwipe = useRef(0);
  const { cardWidth, distance } = galleryGeometry(width);
  const selectedExhibit = exhibits[active];

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(entries => setWidth(entries[0].contentRect.width));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const card = cardRefs.current[active];
    if (!card) return;
    const observer = new ResizeObserver(entries => setHeight(Math.ceil(entries[0].borderBoxSize?.[0]?.blockSize ?? card.offsetHeight) + 82));
    observer.observe(card);
    return () => observer.disconnect();
  }, [active]);

  function select(index: number) {
    setActive(wrapIndex(index, exhibits.length));
  }

  function handleKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next = wrapIndex(active + (event.key === "ArrowRight" ? 1 : -1), exhibits.length);
    setActive(next);
    selectorRefs.current[next]?.focus();
  }

  function pointerDown(event: PointerEvent<HTMLDivElement>) {
    if ((event.target as Element).closest(".plaque")) return;
    swipe.current = { x: event.clientX, y: event.clientY };
  }

  function pointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = swipe.current;
    swipe.current = null;
    if (!start) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      lastSwipe.current = Date.now();
      select(active + (dx < 0 ? 1 : -1));
    }
  }

  return (
    <div className="gallery" onKeyDown={handleKey}>
      <div
        ref={stageRef}
        className="gallery-stage"
        style={{ height }}
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onPointerDown={pointerDown}
        onPointerUp={pointerUp}
        onPointerCancel={() => { swipe.current = null; }}
      >
        {exhibits.map((exhibit, index) => {
          const offset = exhibitOffset(index, active, exhibits.length);
          const selected = offset === 0;
          const open = expanded.includes(exhibit.id);
          const storyId = `${exhibit.id}-story`;
          return (
            <article
              key={exhibit.id}
              ref={element => { cardRefs.current[index] = element; }}
              className={`exhibit ${selected ? "is-active" : ""}`}
              style={{
                width: cardWidth,
                marginLeft: -cardWidth / 2,
                transform: selected ? "translate3d(0, 28px, 0) rotateY(0deg)" : `translate3d(${offset * distance}px, 0, -185px) rotateY(${-offset * 25}deg)`,
              }}
            >
              <div className="exhibit-display">
                <div className="picture-light" aria-hidden="true" />
                <button
                  className="picture-frame"
                  type="button"
                  aria-label={`Show ${exhibit.title}`}
                  aria-pressed={selected}
                  onClick={() => { if (Date.now() - lastSwipe.current > 400) select(index); }}
                >
                  <span className={`exhibit-art art-${exhibit.visual}`}>
                    {exhibit.image && <Image src={exhibit.image} alt={exhibit.imageAlt ?? exhibit.title} width={1200} height={750} priority={index === 0} className="project-image" />}
                    {exhibit.visual === "travel" && <span className="travel-wordmark">TravelMate<span>Find your next adventure.</span></span>}
                    {exhibit.visual === "weather" && <><span className="weather-sun" aria-hidden="true" /><span className="weather-cloud" aria-hidden="true" /><span className="weather-wordmark">SimPal<span>Laundry Weather Planner</span></span></>}
                    {exhibit.visual === "qualification" && <><span className="institution">{exhibit.institution}</span><span className="qualification-name">{exhibit.subtitle}</span><span className="qualification-focus">{exhibit.title}</span></>}
                  </span>
                </button>
              </div>
              <div className="plaque" inert={!selected} aria-hidden={!selected}>
                <div className="plaque-main">
                  <p className="exhibit-number">{String(index + 1).padStart(2, "0")} / {exhibit.category}</p>
                  <h2>{exhibit.title}</h2>
                  <p className="exhibit-description">{exhibit.description}</p>
                  <p className="exhibit-technologies">{exhibit.technologies.join(" · ")}</p>
                  <div className="exhibit-links">
                    {exhibit.liveUrl ? <><a href={exhibit.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a><a href={exhibit.sourceUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></> : <span className="completion-label">Completed qualification</span>}
                  </div>
                  <button
                    className="story-toggle"
                    type="button"
                    aria-expanded={open}
                    aria-controls={storyId}
                    onClick={() => setExpanded(current => open ? current.filter(id => id !== exhibit.id) : [...current, exhibit.id])}
                  >
                    <span>{exhibit.liveUrl ? "Project story" : "Study details"}</span><span aria-hidden="true">{open ? "−" : "+"}</span>
                  </button>
                </div>
                <div id={storyId} className="story-body" hidden={!open || !selected}>
                  {exhibit.story.map(section => <section key={section.title}><h3>{section.title}</h3><p>{section.text}</p></section>)}
                  {exhibit.demoNote && <p className="demo-note">{exhibit.demoNote}</p>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="gallery-controls">
        <button className="gallery-arrow" type="button" aria-label={`Previous ${label === "Project gallery" ? "project" : "qualification"}`} onClick={() => select(active - 1)}>‹</button>
        <div className="exhibit-selector" aria-label="Choose an exhibit">
          {exhibits.map((exhibit, index) => <button key={exhibit.id} ref={element => { selectorRefs.current[index] = element; }} type="button" aria-label={exhibit.title} aria-pressed={index === active} onClick={() => select(index)}>{String(index + 1).padStart(2, "0")}</button>)}
        </div>
        <button className="gallery-arrow" type="button" aria-label={`Next ${label === "Project gallery" ? "project" : "qualification"}`} onClick={() => select(active + 1)}>›</button>
      </div>
      <p className="gallery-status" aria-live="polite" aria-atomic="true">{selectedExhibit.title} <span aria-hidden="true">·</span> {active + 1} of {exhibits.length}</p>
      <noscript><div className="no-script-projects">{exhibits.map(exhibit => <article key={exhibit.id}><h2>{exhibit.title}</h2><p>{exhibit.description}</p>{exhibit.liveUrl && <a href={exhibit.liveUrl}>Open live demo</a>}</article>)}</div></noscript>
    </div>
  );
}
