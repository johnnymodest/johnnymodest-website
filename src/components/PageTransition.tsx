'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;

      // Animate on first visit of the session, but not on browser refresh
      const visited = sessionStorage.getItem('jm-visited');
      if (!visited) {
        setAnimate(true);
      }
      sessionStorage.setItem('jm-visited', '1');
      return;
    }

    // Route changed — re-trigger animation
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return <div className={animate ? 'page-enter' : ''}>{children}</div>;
}
