import React from 'react';

/**
 * Reusable Card component using the children prop.
 * Bonus Task: "Create a reusable Card component using the children prop."
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card inner content
 * @param {string} [props.className] - Optional additional CSS classes
 * @param {boolean} [props.highlight] - Whether to apply an accent border highlight
 * @param {React.CSSProperties} [props.style] - Inline styles
 */
export default function Card({ children, className = '', highlight = false, style = {}, ...restProps }) {
  const cardClassName = `custom-card ${highlight ? 'highlight' : ''} ${className}`.trim();

  return (
    <div className={cardClassName} style={style} {...restProps}>
      {children}
    </div>
  );
}
