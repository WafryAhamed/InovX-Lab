import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className, onLoad }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="h-10 w-10 rounded-full border-2 border-neutral-800 border-t-neutral-400 animate-spin"
            aria-label="Loading 3D scene"
            role="status"
          />
        </div>
      }
    >
      <Spline 
        scene={scene} 
        className={className} 
        onLoad={onLoad}
      />
    </Suspense>
  );
}
