import React, { useState } from 'react';
import { motion } from 'framer-motion';

function WorkExperienceCard({ data, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="work-experience-item"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Date Badge on Left/Right */}
        <motion.div
          className={`work-date-badge ${index % 2 === 0 ? 'left' : 'right'}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-mono" style={{ color: data.color }}>
            {data.date}
          </span>
        </motion.div>

        {/* Timeline Dot */}
        <div className="work-timeline-dot" style={{ boxShadow: `0 0 0 4px ${data.color}` }}>
          <div style={{ background: data.color }}></div>
        </div>

        {/* Experience Card */}
        <motion.div
          className="work-card"
          whileHover={{ y: -5, boxShadow: 'var(--shadow-xl)' }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Company Logo */}
          <div className="work-card-header">
            <div className="work-logo-container">
              {data.logo ? (
                <img
                  src={data.logo}
                  alt={`${data.company} logo`}
                  className="work-logo"
                  style={{
                    filter: `drop-shadow(0 0 10px ${data.color}40)`,
                  }}
                />
              ) : (
                <div className="work-logo-placeholder" style={{ background: data.color }}>
                  {data.company.charAt(0)}
                </div>
              )}
            </div>

            <div className="work-header-text">
              <h3 className="work-company" style={{ color: data.color }}>
                {data.company}
              </h3>
              <h4 className="work-role">{data.role}</h4>
              <div className="work-meta">
                <span className="work-location">{data.location}</span>
              </div>
            </div>
          </div>

          {/* Tools/Skills Tags - Always Visible */}
          <div className="work-tools">
            {data.tools.map((tool, idx) => (
              <motion.span
                key={idx}
                className="work-tool-tag"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  backgroundColor: data.color,
                  color: '#ffffff'
                }}
                style={{
                  borderColor: data.color,
                  color: data.color,
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>

          {/* Expand Indicator */}
          <div className="work-expand-hint">
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
              Click to see details
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Expanded Modal */}
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
          >
            <button className="work-modal-close" onClick={() => setIsExpanded(false)}>
              ✕
            </button>

            <div className="work-modal-header">
              <h2 style={{ color: data.color }}>{data.company}</h2>
              <h3>{data.role}</h3>
              <p className="text-mono" style={{ color: 'var(--text-secondary)' }}>
                {data.date} • {data.location}
              </p>
            </div>

            <div className="work-modal-body">
              <h4 style={{ color: 'var(--accent-teal)', marginBottom: 'var(--spacing-md)' }}>
                Key Contributions
              </h4>
              <ul style={{ marginBottom: 'var(--spacing-lg)' }}>
                {data.summary.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: 'var(--spacing-sm)' }}>
                    <span style={{ color: data.color }}>▸</span> {point}
                  </li>
                ))}
              </ul>

              <h4 style={{ color: 'var(--accent-teal)', marginBottom: 'var(--spacing-md)' }}>
                Technologies & Skills
              </h4>
              <div className="work-tools" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {data.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="work-tool-tag"
                    style={{ borderColor: data.color, color: data.color }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Placeholder for images/additional content */}
              <div
                style={{
                  padding: 'var(--spacing-lg)',
                  background: 'var(--gradient-subtle)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  color: 'var(--text-secondary)',
                }}
              >
                <p>📸 Add project images and testimonials here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default WorkExperienceCard;
