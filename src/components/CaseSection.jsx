import React from 'react';

function CaseSection({
  title,
  subtitle,
  color = '#00C6A7',
  children,
  layout = 'full', // 'full', 'split-left', 'split-right'
  image,
  background = 'dark' // 'dark' or 'light'
}) {
  const bgColor = background === 'dark' ? '#f5f5f5' : '#ffffff';
  const textColor = '#000000';

  if (layout === 'split-left' || layout === 'split-right') {
    return (
      <div style={{
        background: bgColor,
        padding: 'var(--spacing-3xl) var(--spacing-xl)',
        display: 'grid',
        gridTemplateColumns: layout === 'split-left' ? '1fr 1.5fr' : '1.5fr 1fr',
        gap: 'var(--spacing-3xl)',
        alignItems: 'center',
        minHeight: '500px'
      }}>
        {/* Text Side */}
        <div style={{
          color: textColor,
          order: layout === 'split-left' ? 0 : 1
        }}>
          {title && (
            <h2 style={{
              fontSize: 'var(--text-4xl)',
              fontWeight: 'bold',
              marginBottom: subtitle ? 'var(--spacing-sm)' : 'var(--spacing-xl)',
              color: textColor,
              lineHeight: '1.2'
            }}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p style={{
              fontSize: 'var(--text-lg)',
              color: textColor,
              opacity: 0.8,
              marginBottom: 'var(--spacing-xl)',
              lineHeight: 'var(--line-height-relaxed)'
            }}>
              {subtitle}
            </p>
          )}
          <div style={{
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--line-height-relaxed)',
            color: textColor
          }}>
            {children}
          </div>
        </div>

        {/* Image Side */}
        {image && (
          <div style={{
            order: layout === 'split-left' ? 1 : 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {typeof image === 'string' ? (
              <img
                src={image}
                alt={title || ''}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)'
                }}
              />
            ) : (
              image
            )}
          </div>
        )}
      </div>
    );
  }

  // Full width layout
  return (
    <div style={{
      background: bgColor,
      padding: 'var(--spacing-3xl) var(--spacing-xl)',
      color: textColor
    }}>
      {title && (
        <h2 style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 'bold',
          marginBottom: 'var(--spacing-xl)',
          color: textColor,
          lineHeight: '1.2'
        }}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p style={{
          fontSize: 'var(--text-lg)',
          color: textColor,
          opacity: 0.8,
          marginBottom: 'var(--spacing-xl)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          {subtitle}
        </p>
      )}
      <div style={{
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--line-height-relaxed)',
        color: textColor
      }}>
        {children}
      </div>
    </div>
  );
}

export default CaseSection;
