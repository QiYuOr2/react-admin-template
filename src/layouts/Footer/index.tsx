import React from 'react';
import { composeClassName } from '../../utils/composeClassName';

const Footer: React.FC<{ className: string | string[] }> = ({
  className,
  children,
}) => {
  return (
    <footer
      className={composeClassName(
        Array.isArray(className) ? [...className] : [className]
      )}
    >
      {children}
    </footer>
  );
};

export default Footer;
