import React from 'react';
import { cn } from '@/lib/utils';

interface VideoProps {
  embedCode: string;
  className?: string;
}

export function Video({ embedCode, className }: VideoProps) {
  return (
    <div
      className={cn('w-full', className)}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
}