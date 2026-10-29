'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * Renders children into `document.body`.
 *
 * Fixed overlays (lightboxes, modals) must leave the `<main>` subtree: `main`
 * carries `relative z-10`, which creates a stacking context, so any overlay
 * inside it paints *under* the `z-50` header no matter how high its own
 * z-index is — which makes the overlay's top controls unclickable.
 */
export default function Portal({ children }: { children: React.ReactNode }) {
  const [mountEl, setMountEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMountEl(document.body);
  }, []);

  if (!mountEl) return null;

  return createPortal(children, mountEl);
}
