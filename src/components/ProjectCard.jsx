import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ProjectCard({
  title,
  description,
  image,
  thumbnailImages,
  additionalImages,
  video,
  tags,
  link,
  github,
  timeline,
  role,
  motivation,
  stage,
  color = '#00C6A7',
  imageDescriptions
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = timeline || role || motivation || stage;

  const handleCardClick = () => {
    if (hasDetails) {
      setIsExpanded(true);
    } else if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.div
        className="card"
        whileHover={{ y: -5 }}
        onClick={handleCardClick}
        style={{ cursor: (hasDetails || (link && link !== '#')) ? 'pointer' : 'default' }}
      >
        {thumbnailImages && thumbnailImages.length > 0 ? (
          thumbnailImages.length === 1 ? (
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
          ) : (
            <div className="thumbnail-grid" style={{ height: '180px' }}>
              {thumbnailImages.slice(0, 2).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${title} ${idx + 1}`}
                />
              ))}
            </div>
          )
        ) : image ? (
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
            height: '180px'
          }}>
            <img
              src={image}
              alt={title}
              className="card-image"
            />
          </div>
        ) : null}
        <div className="card-content">
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
        </div>
      </motion.div>

      {/* Expanded Modal */}
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

              {/* Project Image */}
              {image && (
                <div style={{
                  borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                  overflow: 'hidden',
                  marginBottom: '0'
                }}>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              )}

              {/* Close button below image or at top if no image */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: image ? 'var(--spacing-md) var(--spacing-md) 0' : 'var(--spacing-md)',
                marginBottom: 'var(--spacing-md)'
              }}>
                <button
                  onClick={() => setIsExpanded(false)}
                  style={{
                    position: 'relative',
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
                    transition: 'all var(--transition-fast)'
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

              <div style={{ padding: '0 var(--spacing-xl) var(--spacing-xl)' }}>
                <div className="work-modal-header" style={{ marginBottom: 'var(--spacing-lg)' }}>
                  <h2 style={{ color, marginBottom: 'var(--spacing-sm)' }}>{title}</h2>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-md)'
                  }}>
                    {description}
                  </p>

                  {/* Timeline and Role in compact format */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--spacing-md)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)'
                  }}>
                    {timeline && (
                      <div>
                        <strong style={{ color }}>Timeline:</strong> {timeline}
                      </div>
                    )}
                    {role && (
                      <div>
                        <strong style={{ color }}>Role:</strong> {role}
                      </div>
                    )}
                  </div>
                </div>

                <div className="work-modal-body">
                  {motivation && (
                    <div style={{ marginBottom: 'var(--spacing-md)' }}>
                      <h4 style={{ color, marginBottom: 'var(--spacing-xs)', fontSize: 'var(--text-base)' }}>
                        Motivation
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{motivation}</p>
                    </div>
                  )}

                  {stage && (
                    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                      <h4 style={{ color, marginBottom: 'var(--spacing-xs)', fontSize: 'var(--text-base)' }}>
                        Stage
                      </h4>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>{stage}</p>
                    </div>
                  )}

                  <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                    <h4 style={{ color, marginBottom: 'var(--spacing-sm)', fontSize: 'var(--text-base)' }}>
                      Tools
                    </h4>
                    <div className="card-tags">
                      {tags && tags.map((tag, index) => (
                        <span
                          key={index}
                          className="card-tag"
                          style={{
                            borderColor: color,
                            color: color,
                            fontSize: 'var(--text-xs)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Additional Images */}
                  {additionalImages && additionalImages.length > 0 && (
                    <div style={{
                      marginBottom: 'var(--spacing-lg)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--spacing-lg)'
                    }}>
                      {additionalImages.map((img, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          gap: 'var(--spacing-lg)',
                          alignItems: 'center'
                        }}>
                          {imageDescriptions && imageDescriptions[`image${idx + 2}`] && (
                            <div style={{
                              flex: '1',
                              fontSize: 'var(--text-base)',
                              color: 'var(--text-secondary)'
                            }}>
                              {imageDescriptions[`image${idx + 2}`]}
                            </div>
                          )}
                          <div style={{
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            maxWidth: '400px',
                            flex: imageDescriptions && imageDescriptions[`image${idx + 2}`] ? '0 0 400px' : '1'
                          }}>
                            <img
                              src={img}
                              alt={`${title} ${idx + 2}`}
                              style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Video Section - Smaller and at the end */}
                  {video && (
                    <div style={{
                      marginBottom: 'var(--spacing-lg)',
                      display: 'flex',
                      gap: 'var(--spacing-lg)',
                      alignItems: 'center'
                    }}>
                      <div style={{
                        flex: '1',
                        fontSize: 'var(--text-base)',
                        color: 'var(--text-secondary)'
                      }}>
                        {imageDescriptions && imageDescriptions.video ? imageDescriptions.video : 'Completed wind turbine'}
                      </div>
                      <div style={{
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        maxWidth: '400px',
                        flex: '0 0 400px'
                      }}>
                        <video
                          src={video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)',
                    flexWrap: 'wrap',
                    alignItems: 'center'
                  }}>
                    {github && github !== '#' && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: 'var(--text-sm)',
                          textDecoration: 'underline'
                        }}
                      >
                        Check out the github
                      </a>
                    )}
                    {link && link !== '#' && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: color,
                          fontSize: 'var(--text-sm)',
                          textDecoration: 'underline'
                        }}
                      >
                        Click here for website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;
