import React from 'react';

export const Logo = ({ width = 36, height = 36, className = '' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="16" height="16" rx="4" fill="#FF6B00" />
      <rect x="20" width="16" height="16" rx="4" fill="#4F46E5" />
      <rect y="20" width="16" height="16" rx="4" fill="#4F46E5" />
      <rect x="20" y="20" width="16" height="16" rx="4" fill="#FF6B00" />
    </svg>
  );
}; 