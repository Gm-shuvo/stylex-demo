// dialog.stylex.ts
import * as stylex from '@stylexjs/stylex';
import { colors, shadows } from '../../../tokens.stylex';

export const styles = stylex.create({
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: colors.dialogOverlay,
    zIndex: 1000,
  },
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 24,
    width: '90%',
    maxWidth: 500,
    zIndex: 1001,
    boxShadow: shadows.large,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: 16,
  },
  header: {
    marginBottom: 16,
  },
  footer: {
    marginTop: 16,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    margin: 0,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});
