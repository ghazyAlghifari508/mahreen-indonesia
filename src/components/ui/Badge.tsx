import React from 'react';

export type BadgeVariant = 'cobalt' | 'azure' | 'slate' | 'ice' | 'outline';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Midtrans Categorical Badge / Pill Component
 *
 * Sourced from Midtrans Design Reference:
 * - Rounded pill radius (`rounded-[17px]` or `rounded-full`)
 * - High-contrast taxonomy & status indicators
 * - Strict Poppins Medium/Semibold/Bold typography
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'ice',
  size = 'md',
  icon,
  className = '',
  children,
  ...restProps
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-poppins font-semibold rounded-[17px] tracking-normal transition-colors whitespace-nowrap select-none';

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'text-[11px] leading-[14px] px-2.5 py-0.5 gap-1',
    md: 'text-[12px] leading-[15px] px-3.5 py-1 gap-1.5',
  };

  const variantClasses: Record<BadgeVariant, string> = {
    cobalt: 'bg-[#054FBF] text-white border border-transparent',
    azure: 'bg-[#007FE7] text-white border border-transparent',
    slate: 'bg-[#EDF4F9] text-[#123049] border border-transparent',
    ice: 'bg-[#F7FCFF] text-[#054FBF] border border-[#007FE7]/25',
    outline: 'bg-transparent text-[#7686AB] border border-[#BBBBBB]',
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim()}
      {...restProps}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

Badge.displayName = 'Badge';

export default Badge;
