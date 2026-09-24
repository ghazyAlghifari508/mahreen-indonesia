import React from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'outline-light' | 'ghost' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asChild?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

/**
 * Midtrans-compliant Button Primitive
 *
 * Implements strict Midtrans visual tokens:
 * - Ultra-sharp 2px micro-radius (`rounded-[2px]`)
 * - Royal Cobalt `#054FBF` primary background transitioning to Midnight Navy `#002855` on hover
 * - Strict Poppins Bold uppercase micro-typography with 0.5px letter-spacing
 * - Zero pill radius on action CTAs
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      target,
      rel,
      icon,
      iconPosition = 'left',
      asChild = false,
      fullWidth = false,
      className = '',
      disabled = false,
      children,
      type = 'button',
      ...restProps
    },
    ref
  ) => {
    // Base styles common across all variants
    const baseClasses =
      'inline-flex items-center justify-center font-poppins font-bold uppercase tracking-[0.5px] rounded-[2px] transition-all duration-200 cursor-pointer select-none active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed whitespace-nowrap';

    // Size variants
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'text-[11px] leading-[15px] py-2 px-4 gap-1.5',
      md: 'text-[12px] leading-[16px] py-[12px] px-[30px] gap-2',
      lg: 'text-[13px] leading-[18px] py-3.5 px-8 gap-2.5',
    };

    // Strict Midtrans color tokens and state transitions
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        'bg-[#054FBF] text-white border border-[#054FBF] hover:bg-[#002855] hover:border-[#002855] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FE7]',
      outline:
        'bg-white text-[#054FBF] border border-[#054FBF] hover:bg-[#054FBF]/5 hover:border-[#002855] hover:text-[#002855] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#054FBF]',
      'outline-light':
        'bg-transparent text-white border border-white/40 hover:border-[#007FE7] hover:text-[#007FE7] hover:bg-[#007FE7]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
      ghost:
        'bg-transparent text-[#123049] border border-transparent hover:bg-[#EDF4F9] hover:text-[#054FBF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#054FBF]',
      dark:
        'bg-[#002855] text-white border border-[#002855] hover:bg-[#123049] hover:border-[#123049] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FE7]',
    };

    const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
      fullWidth ? 'w-full' : ''
    } ${className}`.trim();

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        {children && <span>{children}</span>}
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </>
    );

    // asChild delegation
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: `${combinedClasses} ${child.props.className || ''}`.trim(),
        ...restProps,
      });
    }

    // Anchor link rendering
    if (href) {
      const safeRel = target === '_blank' && !rel ? 'noopener noreferrer' : rel;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={safeRel}
          className={combinedClasses}
          {...(restProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </a>
      );
    }

    // Default HTML button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        className={combinedClasses}
        {...restProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
