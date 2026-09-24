import React from 'react';

export type SeparatorVariant = 'curve-grey' | 'curve-blue' | 'diagonal-mist' | 'wave-ice' | 'midnight-cut';

interface SectionSeparatorProps {
  variant?: SeparatorVariant;
  flip?: boolean;
  className?: string;
}

/**
 * Midtrans Authentic Section Separator & Organic Curve Transitions
 *
 * Implements the signature curved & diagonal section dividers observed in:
 * - midtrans.html (.payment-solution-home::after, .setup-section::after)
 * - midtrans-online-payment.html (.sloppy-pattern)
 */
export const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  variant = 'curve-grey',
  flip = false,
  className = '',
}) => {
  const flipClass = flip ? '-scale-x-100' : '';

  switch (variant) {
    case 'curve-grey':
      // Midtrans separator-grey: Half-width organic curve connecting white/ice to mist
      return (
        <div className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-8 sm:h-12 md:h-16 ${flipClass}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0 64C360 64 480 0 720 0C960 0 1080 64 1440 64V64H0Z"
              fill="#EDF4F9"
            />
          </svg>
        </div>
      );

    case 'curve-blue':
      // Midtrans separator-blue: Royal cobalt / azure tinted transition curve
      return (
        <div className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-8 sm:h-12 md:h-16 ${flipClass}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0 64C420 64 540 8 760 8C980 8 1100 64 1440 64V64H0Z"
              fill="#054FBF"
              fillOpacity="0.12"
            />
          </svg>
        </div>
      );

    case 'diagonal-mist':
      // Midtrans .sloppy-pattern: Asymmetrical angled cut-path (clip-path: polygon)
      return (
        <div
          className={`w-full h-12 sm:h-16 md:h-20 bg-[#EDF4F9] pointer-events-none select-none ${className}`}
          style={{
            clipPath: flip
              ? 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)'
              : 'polygon(0 0, 100% 60%, 100% 100%, 0 100%)',
          }}
        />
      );

    case 'midnight-cut':
      // Transition from light sections into deep Midnight Navy (#002855)
      return (
        <div className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
          <svg
            viewBox="0 0 1440 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-8 sm:h-12 md:h-14 ${flipClass}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0 56C480 12 720 0 1440 56V56H0Z"
              fill="#002855"
            />
          </svg>
        </div>
      );

    case 'wave-ice':
    default:
      // Soft ambient wave into Ice Tint (#F7FCFF)
      return (
        <div className={`relative w-full overflow-hidden leading-none pointer-events-none select-none ${className}`}>
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full h-6 sm:h-10 md:h-12 ${flipClass}`}
            preserveAspectRatio="none"
          >
            <path
              d="M0 0C320 38 640 48 960 28C1120 18 1280 6 1440 0V48H0V0Z"
              fill="#F7FCFF"
            />
          </svg>
        </div>
      );
  }
};

export default SectionSeparator;
