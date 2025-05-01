import * as stylex from '@stylexjs/stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

export const 
colors = stylex.defineVars({
  primaryText: {default: 'black', [DARK]: 'white'},
  secondaryText: {default: '#333', [DARK]: '#ccc'},
  accent: {default: 'blue', [DARK]: 'lightblue'},
  background: {default: 'white', [DARK]: 'black'},
  lineColor: {default: 'gray', [DARK]: 'lightgray'},
  sidebar: '#1e1e2f',
  card: '#ffffff',
  primary: '#4f46e5',
  text: '#111827',
  mutedText: '#6b7280',
});

export const sizes = stylex.defineVars({
  small: '10px',
  medium: '20px',
  large: '30px',
});

export const spacing = stylex.defineVars({
  small: '5px',
  medium: '10px',
  large: '20px',
});

export const shadows = stylex.defineVars({
  small: '0 1px 3px rgba(0,0,0,0.1)',
  medium: '0 4px 6px rgba(0,0,0,0.1)',
  large: '0 10px 20px rgba(0,0,0,0.1)',
});

export const borders = stylex.defineVars({
  thin: '1px solid',
  thick: '2px solid',
});

export const borderRadius = stylex.defineVars({
  small: '4px',
  medium: '8px',
  large: '16px',
});

export const fonts = stylex.defineVars({
  body: 'Arial, sans-serif',
  heading: 'Georgia, serif',
});

export const fontSizes = stylex.defineVars({
  small: '12px',
  medium: '16px',
  large: '20px',
});

export const fontWeights = stylex.defineVars({
  normal: '400',
  bold: '700',
});