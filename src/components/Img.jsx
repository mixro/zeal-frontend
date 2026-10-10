import { useEffect, useRef, useState } from 'react';
import { pexels } from '../data/images';

const WIDTHS = [480, 800, 1200, 1600];

/**
 * Responsive, lazy image with a shimmer placeholder and an automatic local fallback.
 * Accepts either { id, fallback, alt } for a Pexels photo or { src, alt } for a local file.
 */
export default function Img({ image, alt, sizes = '100vw', priority = false, contain = false, className = '', style }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);

  const isRemote = Boolean(image?.id) && !failed;
  const src = isRemote ? pexels(image.id, 1200) : failed ? image?.fallback || image?.src : image?.src;
  const srcSet = isRemote ? WIDTHS.map((w) => `${pexels(image.id, w)} ${w}w`).join(', ') : undefined;

  // Cached images may finish before React attaches onLoad.
  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div className={`img ${contain ? 'img--contain' : ''} ${loaded ? 'is-loaded' : ''} ${className}`} style={style}>
      <img
        ref={ref}
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt ?? image?.alt ?? ''}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : undefined}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!failed && image?.fallback) {
            setFailed(true);
            setLoaded(false);
          } else setLoaded(true);
        }}
      />
    </div>
  );
}
