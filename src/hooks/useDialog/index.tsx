import * as React from 'react';

export function useDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  // ---------------------------------------------
  // Functions
  const open = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  // Transformations
  // ---------------------------------------------
  // API

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
