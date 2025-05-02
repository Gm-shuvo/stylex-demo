import * as stylex from '@stylexjs/stylex';

export const button = stylex.create({
  base: {
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out',
  },
  disabled: {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  spinner: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    border: '2px solid currentColor',
    borderTopColor: 'transparent',
    animationName: stylex.keyframes({
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    }),
    animationDuration: '0.6s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    pointerEvents: 'none',
  },
});

export const variants = stylex.create({
  primary: {
    backgroundColor: '#3b82f6',
    color: 'white',
    ':hover': {
      backgroundColor: '#2563eb',
    },
    ':active': {
      backgroundColor: '#1d4ed8',
    },
  },
  secondary: {
    backgroundColor: '#4b5563',
    color: 'white',
    ':hover': {
      backgroundColor: '#374151',
    },
    ':active': {
      backgroundColor: '#1f2937',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '1px solid #3b82f6',
    ':hover': {
      backgroundColor: '#dbeafe',
    },
    ':active': {
      backgroundColor: '#bfdbfe',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#3b82f6',
    ':hover': {
      backgroundColor: '#f3f4f6',
    },
    ':active': {
      backgroundColor: '#e5e7eb',
    },
  },
  link: {
    backgroundColor: 'transparent',
    color: '#3b82f6',
    ':hover': {
      textDecoration: 'underline',
    },
    ':active': {
      color: '#1d4ed8',
    },
  },
  destructive: {
    backgroundColor: '#ef4444',
    color: 'white',
    ':hover': {
      backgroundColor: '#dc2626',
    },
    ':active': {
      backgroundColor: '#b91c1c',
    },
  },
  unstyled: {
    backgroundColor: 'transparent',
    color: 'inherit',
    ':hover': {
      backgroundColor: 'transparent',
    },
    ':active': {
      backgroundColor: 'transparent',
    },
  },
});

export const sizes = stylex.create({
  sm: {
    fontSize: 14,
    padding: '8px 12px',
  },
  md: {
    fontSize: 16,
    padding: '10px 16px',
  },
  lg: {
    fontSize: 18,
    padding: '12px 20px',
  },
});


  


