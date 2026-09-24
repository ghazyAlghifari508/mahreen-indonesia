import React from 'react';

export type WaveType = 
  | 'white'        // pattern-white.png (Navy -> #F7FCFF)
  | 'grey'         // pattern-grey.png (#F7FCFF -> #EDF4F9)
  | 'blue'         // pattern-blue.png (Light -> Navy #002855)
  | 'blue-left'    // pattern-blue-left.png (Variant Navy)
  | 'clear-white'  // pattern-clear-white.png (Light -> #FFFFFF)
  | 'footer'       // pattern-footer.png (Light -> #191E24)
  | 'white-right'; // pattern-white-right.png (Usecase / Subpages)

interface WaveDividerProps {
  type: WaveType;
  className?: string;
}

const WAVE_PATTERNS: Record<WaveType, string> = {
  'white': "bg-[url('/assets/pattern-white.png')]",
  'grey': "bg-[url('/assets/pattern-grey.png')]",
  'blue': "bg-[url('/assets/pattern-blue.png')]",
  'blue-left': "bg-[url('/assets/pattern-blue-left.png')]",
  'clear-white': "bg-[url('/assets/pattern-clear-white.png')]",
  'footer': "bg-[url('/assets/pattern-footer.png')]",
  'white-right': "bg-[url('/assets/pattern-white-right.png')]",
};

export const WaveDivider: React.FC<WaveDividerProps> = ({ type, className = '' }) => {
  return (
    <div 
      className={`w-full h-[120px] sm:h-[160px] md:h-[207px] -mt-[118px] sm:-mt-[158px] md:-mt-[205px] relative z-20 pointer-events-none bg-[length:100%_100%] bg-no-repeat ${WAVE_PATTERNS[type]} ${className}`}
      aria-hidden="true"
    />
  );
};

export default WaveDivider;
