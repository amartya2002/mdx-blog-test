import React from 'react';
import clsx from 'clsx';

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={clsx(className, 'mx-auto  max-w-2xl  px-5 ')}>
      {children}
    </div>
  );
}

