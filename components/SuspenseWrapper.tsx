// components/SuspenseWrapper.tsx
import React, { Suspense } from 'react';

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<div>Loading...</div>}>
    {children}
  </Suspense>
);

export default SuspenseWrapper;