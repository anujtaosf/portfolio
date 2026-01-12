import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendar, FaUser } from 'react-icons/fa';

function CaseStudyCard({
  title,
  description,
  thumbnailImages,
  tags,
  timeline,
  role,
  color = '#00C6A7',
  date,
  image, // Hero image for the expanded view
  children // This will contain all the case study sections
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Thumbnail Card */}
      <motion.div
        className="card"
        whileHover={{ y: -5 }}
        onClick={() => setIsExpanded(true)}
        style={{ cursor: 'pointer' }}
      >
        {thumbnailImages && thumbnailImages.length > 0 && (
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            height: '180px'
          }}>
            <img
              src={thumbnailImages[0]}
              alt={title}
              className="card-image"
            />
          </div>
        )}
        <div className="card-content" style={{ position: 'relative' }}>
          <h3 className="card-title" style={{ color }}>{title}</h3>
          <p className="card-description">{description}</p>
          {tags && tags.length > 0 && (
            <div className="card-tags">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="card-tag"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: color,
                    color: '#ffffff'
                  }}
                  style={{
                    borderColor: color,
                    color: color
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
          {date && (
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              fontSize: '0.7rem',
              color: color,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <FaCalendar />
              {date}
            </div>
          )}
        </div>
      </motion.div>

      {/* Expanded Case Study Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="work-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              className="work-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxHeight: '90vh',
                overflowY: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style>{`
                .work-modal-content::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {/* Hero Image */}
              {image && (
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-md) var(--radius-md) 0 0'
                }}>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  {/* Close button on top of image */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    style={{
                      position: 'absolute',
                      top: 'var(--spacing-md)',
                      right: 'var(--spacing-md)',
                      background: 'var(--bg-secondary)',
                      border: '2px solid var(--border-color)',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                      transition: 'all var(--transition-fast)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-coral)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--bg-secondary)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Header Section - Full Width */}
              <div style={{
                padding: 'var(--spacing-2xl) var(--spacing-xl)',
                background: 'var(--bg-primary)',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <h2 style={{
                  color,
                  marginBottom: 'var(--spacing-lg)',
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 'bold'
                }}>{title}</h2>

                <p style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--spacing-xl)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  {description}
                </p>

                {/* Timeline and Role */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-xl)',
                  fontSize: 'var(--text-base)',
                  marginBottom: 'var(--spacing-lg)'
                }}>
                  {timeline && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaCalendar style={{ color }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{timeline}</span>
                    </div>
                  )}
                  {role && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FaUser style={{ color }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{role}</span>
                    </div>
                  )}
                </div>

                {/* Tools */}
                {tags && tags.length > 0 && (
                  <div className="card-tags" style={{ gap: 'var(--spacing-sm)' }}>
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="card-tag"
                        style={{
                          borderColor: color,
                          color: color,
                          fontSize: 'var(--text-sm)',
                          padding: '6px 14px'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Content - Full Width */}
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CaseStudyCard;
