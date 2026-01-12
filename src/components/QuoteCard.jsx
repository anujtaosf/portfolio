import React from 'react';

function QuoteCard({ quote, name, role, headshot, color = '#00C6A7', layout = 'side-by-side' }) {
  // layout can be 'side-by-side' (for two people) or 'single' (one person with icons)

  if (layout === 'single') {
    return (
      <div style={{
        background: '#ffffff',
        padding: 'var(--spacing-lg) var(--spacing-xl) var(--spacing-3xl)',
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: 'var(--spacing-3xl)',
        alignItems: 'center',
        minHeight: '400px'
      }}>
        {/* Left: Person */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--spacing-md)'
        }}>
          {headshot && (
            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              overflow: 'hidden'
            }}>
              <img
                src={headshot}
                alt={name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          )}
          {name && (
            <h3 style={{
              fontSize: 'var(--text-2xl)',
              fontWeight: 'bold',
              color: color,
              marginBottom: '0'
            }}>
              {name}
            </h3>
          )}
          {role && (
            <p style={{
              fontSize: 'var(--text-base)',
              color: '#000000',
              margin: '0'
            }}>
              {role}
            </p>
          )}
        </div>

        {/* Right: Quote content */}
        <div style={{
          color: '#000000',
          fontSize: 'var(--text-lg)',
          lineHeight: 'var(--line-height-relaxed)'
        }}>
          {quote}
        </div>
      </div>
    );
  }

  // Side by side layout (for two people)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--spacing-xl) var(--spacing-lg)',
      minHeight: '400px'
    }}>
      {headshot && (
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: 'var(--spacing-md)'
        }}>
          <img
            src={headshot}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      {name && (
        <h3 style={{
          fontSize: 'var(--text-2xl)',
          fontWeight: 'bold',
          color: color,
          marginBottom: 'var(--spacing-xs)',
          textAlign: 'center'
        }}>
          {name}
        </h3>
      )}
      {role && (
        <p style={{
          fontSize: 'var(--text-base)',
          color: '#000000',
          margin: '0 0 var(--spacing-md) 0',
          textAlign: 'center'
        }}>
          {role}
        </p>
      )}
      {quote && (
        <p style={{
          fontSize: 'var(--text-base)',
          color: '#000000',
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 'var(--line-height-relaxed)',
          maxWidth: '400px'
        }}>
          "{quote}"
        </p>
      )}
    </div>
  );
}

export default QuoteCard;
