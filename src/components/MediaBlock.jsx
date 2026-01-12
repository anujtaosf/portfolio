import React from 'react';

function MediaBlock({
  src,
  alt = '',
  caption,
  type = 'image', // 'image' or 'video'
  layout = 'full', // 'full', 'half', 'third'
  captionPosition = 'below' // 'below' or 'side'
}) {
  const widthMap = {
    full: '100%',
    half: '50%',
    third: '33.33%'
  };

  const media = type === 'video' ? (
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: 'var(--radius-md)',
        display: 'block'
      }}
    />
  ) : (
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: 'var(--radius-md)',
        display: 'block'
      }}
    />
  );

  if (captionPosition === 'side' && caption) {
    return (
      <div style={{
        display: 'flex',
        gap: 'var(--spacing-lg)',
        alignItems: 'center',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div style={{ flex: 1 }}>
          <p style={{
            fontSize: 'var(--text-base)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            {caption}
          </p>
        </div>
        <div style={{
          flex: '0 0 400px',
          maxWidth: '400px'
        }}>
          {media}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: widthMap[layout],
      marginBottom: 'var(--spacing-lg)'
    }}>
      {media}
      {caption && captionPosition === 'below' && (
        <p style={{
          marginTop: 'var(--spacing-sm)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-secondary)',
          fontStyle: 'italic',
          textAlign: 'center'
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

export default MediaBlock;
