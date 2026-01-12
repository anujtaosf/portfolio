import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function clampIndex(i, n) {
  if (n <= 0) return 0;
  return ((i % n) + n) % n; // safe wrap
}

export default function HobbyPostCard({ title, description, images = [] }) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images : []), [images]);
  const count = safeImages.length;

  const [idx, setIdx] = useState(0);
  const active = count > 0 ? safeImages[clampIndex(idx, count)] : null;

  const next = () => setIdx((v) => (count ? clampIndex(v + 1, count) : 0));
  const prev = () => setIdx((v) => (count ? clampIndex(v - 1, count) : 0));

  const showControls = count > 1;

  return (
    <div className="hobby-post">
      {/* Left: text */}
      <div className="hobby-post-text">
        <h3 className="hobby-post-title">{title}</h3>
        <p className="hobby-post-desc">{description}</p>
      </div>

      {/* Right: slideshow */}
      <div className="hobby-post-media">
        <div className="hobby-slideshow">
          {active ? (
            <motion.div
                key={active}
                className="hobby-slide"
                initial={{ opacity: 0.0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.0, scale: 0.99 }}
                transition={{ duration: 0.25 }}
                onClick={showControls ? next : undefined}
                style={{ cursor: showControls ? "pointer" : "default" }}
            >
                {/* Blurred background using the same image */}
                <div
                className="hobby-slide-bg"
                style={{ backgroundImage: `url(${active})` }}
                aria-hidden="true"
                />

                {/* Foreground image, always fully visible */}
                <img
                src={active}
                alt={`${title} photo ${idx + 1}`}
                className="hobby-slide-img"
                draggable="false"
                />
            </motion.div>
            ) : (
            <div className="hobby-slide-placeholder">
                <span>add photos</span>
            </div>
            )}


          {/* Click zones (optional but feels like IG) */}
          {showControls && (
            <>
              <button className="hobby-nav hobby-nav-left" onClick={prev} aria-label="Previous image">
                ‹
              </button>
              <button className="hobby-nav hobby-nav-right" onClick={next} aria-label="Next image">
                ›
              </button>
            </>
          )}

          {/* Dots */}
          {showControls && (
            <div className="hobby-dots" aria-label="Slideshow position">
              {safeImages.map((_, i) => (
                <button
                  key={i}
                  className={`hobby-dot ${i === clampIndex(idx, count) ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
