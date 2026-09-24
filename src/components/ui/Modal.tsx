import React, { useEffect, useRef } from 'react';
import { Cancel01Icon } from '@hugeicons/core-free-icons';
import { Icon } from './Icon';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  className?: string;
  showCloseButton?: boolean;
}

export const ModalHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`px-6 py-5 border-b border-[#EDF4F9] ${className}`.trim()}>
    {children}
  </div>
);

export const ModalTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
}> = ({ children, className = '', id }) => (
  <h2
    id={id}
    className={`font-poppins font-bold text-[20px] leading-[28px] text-[#123049] ${className}`.trim()}
  >
    {children}
  </h2>
);

export const ModalBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div className={`px-6 py-6 overflow-y-auto max-h-[calc(85vh-130px)] ${className}`.trim()}>
    {children}
  </div>
);

export const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <div
    className={`px-6 py-4 bg-[#F7FCFF] border-t border-[#EDF4F9] flex items-center justify-end gap-3 rounded-b-[8px] ${className}`.trim()}
  >
    {children}
  </div>
);

/**
 * Midtrans Accessible Modal Dialog Overlay
 *
 * Sourced from Midtrans Design Reference:
 * - Backdrop: Black 60% with backdrop-blur-sm, z-50
 * - Surface: Pure White, soft 8px radius (`rounded-[8px]`), atmospheric flyout shadow
 * - Close Trigger: 36x36px subtle grey circle (`#F0F0F0` hover `#DCE1E6`)
 * - Native keyboard accessibility (Escape to dismiss, focus trap considerations, body scroll locking)
 */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footer,
  maxWidth = '2xl',
  className = '',
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleId = useRef(`modal-title-${Math.random().toString(36).substring(2, 9)}`).current;

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthMap: Record<NonNullable<ModalProps['maxWidth']>, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${maxWidthMap[maxWidth]} bg-white rounded-[8px] shadow-[0px_1px_40px_rgba(0,0,0,0.12)] border border-[#EDF4F9] flex flex-col my-auto transition-all animate-scale-up ${className}`.trim()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Midtrans System Overlay Close Trigger */}
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup Dialog"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F0F0F0] hover:bg-[#DCE1E6] text-[#123049] flex items-center justify-center transition-colors duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#054FBF]"
          >
            <Icon icon={Cancel01Icon} size={18} />
          </button>
        )}

        {/* Structured Header */}
        {(title || subtitle) && (
          <ModalHeader className="pr-14">
            {title && <ModalTitle id={titleId}>{title}</ModalTitle>}
            {subtitle && (
              <p className="mt-1 text-[13px] leading-[18px] text-[#7686AB] font-poppins font-normal">
                {subtitle}
              </p>
            )}
          </ModalHeader>
        )}

        {/* Body Content */}
        <ModalBody>{children}</ModalBody>

        {/* Footer actions */}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

export default Modal;
