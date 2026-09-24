import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import type { IconSvgElement } from '@hugeicons/react';

interface IconProps {
  icon: IconSvgElement;
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

/**
 * Standardized Hugeicons Icon Primitive for Mahreen
 * Replaces generic Lucide outline icons with fintech-grade Hugeicons.
 */
export const Icon: React.FC<IconProps> = ({
  icon,
  size = 18,
  color = 'currentColor',
  strokeWidth = 1.75,
  className = '',
}) => {
  return (
    <span className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <HugeiconsIcon
        icon={icon}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    </span>
  );
};

export default Icon;
